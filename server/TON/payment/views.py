import json, hmac, hashlib
from django.conf import settings
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import ensure_csrf_cookie , csrf_exempt
from django.views.decorators.http import require_POST
from .models import UserWallet

import hashlib
import hmac
import time
from django.conf import settings

def verify_telegram_auth(data: dict) -> bool:
    check_hash = data.pop('hash', None)
    if not check_hash:
        return False

    data_check_arr = []
    for key in sorted(data.keys()):
        value = data[key]
        data_check_arr.append(f"{key}={value}")

    data_check_string = "\n".join(data_check_arr)
    secret_key = hashlib.sha256(settings.TELEGRAM_BOT_TOKEN.encode()).digest()
    computed_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()

    if computed_hash != check_hash:
        return False

    auth_date = int(data.get("auth_date", "0"))
    if time.time() - auth_date > 86400:
        return False
    return True



@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({'message': 'CSRF cookie set'})

@csrf_exempt
def link_wallet(request):

    if request.method != "POST":
        return JsonResponse({'error': 'Only POST allowed'}, status=405)
    
    payload = json.loads(request.body)
    tg = payload["telegram"]
    wallet = payload["wallet"]
    signature = payload["signature"]

    if not verify_telegram_auth(tg):
        return HttpResponseBadRequest("Invalid Telegram login")

    UserWallet.objects.update_or_create(
        telegram_id=tg["id"],
        defaults={"wallet_address": wallet, "signature": signature}
    )
    return JsonResponse({"status": "linked"})

