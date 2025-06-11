import React, { useState, useEffect } from "react";
import { useTonConnectUI, TonConnectUI } from "@tonconnect/ui-react";

interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    onTelegramAuth: (user: TelegramUser) => void;
  }
}

export function LinkWallet() {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);
  const [ton] = useTonConnectUI();

  useEffect(() => {
    window.onTelegramAuth = (user: TelegramUser) => setTgUser(user);
    return () => {
      window.onTelegramAuth = () => {};
    };
  }, []);

  const handleLink = async () => {
    if (!tgUser || !ton.connected) {
      alert("Please login and connect wallet");
      return;
    }

    if (!ton.account?.address) {
      alert("Wallet address not available");
      return;
    }

    const wallet = ton.account.address;
    const msg = `Link: tg ${tgUser.id}, wallet ${wallet}, at ${Date.now()}`;

    try {
      const signed = await ton.signText({ text: msg });

      const res = await fetch("/api/link-wallet/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          telegram: tgUser,
          wallet,
          signature: signed.signature,
        }),
      });

      if (res.ok) {
        alert("Wallet linked!");
      } else {
        alert("Failed to link.");
      }
    } catch (error) {
      console.error("Error during linking:", error);
      alert("An error occurred during linking.");
    }
  };

  return (
    <div>
      {!tgUser && <div id="telegram-container" />}
      <button onClick={handleLink} disabled={!tgUser || !ton.connected}>
        Link Telegram + TON Wallet
      </button>
    </div>
  );
}
