from telegram import Update, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

BOT_TOKEN = "YOUR_BOT_TOKEN"
MINI_APP_URL = "https://your-frontend-url.com"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton("Deposit TON", web_app=WebAppInfo(url=MINI_APP_URL))]
    ])
    await update.message.reply_text("Welcome! Click below to deposit TON:", reply_markup=keyboard)

app = ApplicationBuilder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))

app.run_polling()
