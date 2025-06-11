import json, hmac, hashlib
from django.conf import settings
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from .models import UserWallet

def verify_telegram(data):
    check_hash = data.pop("hash", None)
    if check_hash is None:
        return False
    secret = hashlib.sha256(settings.TELEGRAM_BOT_TOKEN.encode()).digest()
    data_str = "\n".join(f"{k}={v}" for k, v in sorted(data.items()))
    hmac_hash = hmac.new(secret, data_str.encode(), hashlib.sha256).hexdigest()
    return hmac_hash == check_hash

@require_POST
def link_wallet(request):
    payload = json.loads(request.body)
    tg = payload["telegram"]
    wallet = payload["wallet"]
    signature = payload["signature"]

    if not verify_telegram(tg):
        return HttpResponseBadRequest("Invalid Telegram login")

    UserWallet.objects.update_or_create(
        telegram_id=tg["id"],
        defaults={"wallet_address": wallet, "signature": signature}
    )
    return JsonResponse({"status": "linked"})

