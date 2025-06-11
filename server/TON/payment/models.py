from django.db import models

class UserWallet(models.Model):
    telegram_id = models.BigIntegerField(primary_key=True)
    wallet_address = models.CharField(max_length=66)  # EQ... format
    signature = models.TextField()
    timestamp = models.DateTimeField(auto_now=True)

