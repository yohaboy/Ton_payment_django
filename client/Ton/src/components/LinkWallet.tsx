import { useTonConnectUI } from "@tonconnect/ui-react";
import type { TelegramUser } from "../shared/types";

interface LinkWalletProps {
  tgUser: TelegramUser | null;
}

export function LinkWallet({ tgUser }: LinkWalletProps) {
  const [ton] = useTonConnectUI();

  const handleLink = async () => {
    console.log("this is called");
    console.log(tgUser);
    console.log(ton.account?.address);
    if (!tgUser || !ton.connected) {
      alert("Please login and connect wallet");
      return;
    }

    if (!ton.account?.address) {
      alert("Wallet address not available");
      console.log("no wallet connected ");
      return;
    }

    const wallet = ton.account.address;
    const msg = `Link: tg ${tgUser.id}, wallet ${wallet}, at ${Date.now()}`;

    try {
      function getCookie(name: string) {
        console.log("called");
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
          const cookies = document.cookie.split(";");
          for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
              cookieValue = decodeURIComponent(
                cookie.substring(name.length + 1)
              );
              console.log("my cookie", cookieValue);
              break;
            }
          }
        }
        return cookieValue;
      }

      await fetch("http://127.0.0.1:8000/api/csrf", {
        credentials: "include",
      });

      const token = getCookie("csrftoken");

      const res = await fetch("http://127.0.0.1:8000/api/link_wallet", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": token ?? "",
        },
        body: JSON.stringify({
          telegram: tgUser,
          wallet,
          signature: msg,
        }),
      });

      if (res.ok) {
        alert("Wallet linked!");
      } else {
        console.log(res);
        alert("Failed to link.");
      }
    } catch (error) {
      console.error("Error during linking:", error);
      console.log("here is the error :", error);
      alert("An error occurred during linking.");
    }
  };

  return (
    <div>
      <button onClick={handleLink}>Link Telegram + TON Wallet</button>
    </div>
  );
}
