# Ton Payment Django

A simple Django template project that demonstrates how to securely connect a user’s Telegram account, verify its authenticity, link it with a TON (The Open Network) wallet, and ensure a one-to-one relationship between Telegram accounts and TON wallet addresses.

---

## 🚀 Features

✅ Connect user accounts via Telegram  
✅ Verify Telegram authentication using secure hashes  
✅ Integrate a TON wallet interface  
✅ Bind a unique TON wallet to each Telegram account — automatically update the linked wallet if the same Telegram user connects a different wallet

---

## ⚙️ Setup

1️⃣ **Clone the repository**

    git clone https://github.com/yohaboy/Ton_payment_django.git
    cd Ton_payment_django

2️⃣ **Create a virtual environment**

    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate

3️⃣ **Install dependencies**

    pip install -r requirements.txt

4️⃣ **Configure environment**

Create a `.env` or update `settings.py` with your:

- TELEGRAM_BOT_TOKEN
- TELEGRAM_BOT_USERNAME (for hash verification)
- TON API credentials (if using a third-party TON API)

5️⃣ **Run migrations**

    python manage.py migrate

6️⃣ **Run the server**

    python manage.py runserver

---

## 🧩 How It Works

1. User connects with Telegram — using Telegram login widgets or a deep link to your bot.
2. Server verifies Telegram hash — using the bot token to ensure authenticity.
3. User links TON wallet — your frontend calls the appropriate endpoint with the wallet address.
4. Backend binds Telegram user ID and TON wallet — ensuring each Telegram account maps to exactly one wallet (updates on new bindings).

---

## 🗂️ Endpoints (Example)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /connect/telegram/ | Initiate Telegram connection |
| POST | /verify/telegram/ | Verify Telegram hash |
| POST | /link/ton/ | Link TON wallet to verified Telegram user |

(Actual routes may vary — adjust accordingly)

---

## 🧪 Development

- Customize templates to match your frontend.
- Add unit tests for hash validation & wallet binding.
- Extend with your preferred TON wallet APIs.

---

## 📌 TODO

- [ ] Add robust error handling.
- [ ] Improve security (rate limiting, replay protection).
- [ ] Add webhooks for TON transactions (optional).
- [ ] Dockerize the project for deployment.

---

## 📄 License

This project is licensed under the MIT License.
See LICENSE for details.

---

## 🙌 Author

Made with ❤️ by John
Feel free to open issues or pull requests to improve this template!

---

## ⭐️ Show Your Support

If you find this helpful, please ⭐️ the repo and share it with other developers!
