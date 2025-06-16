import { useState } from "react";
import TGLogin from "./TGLogin";
import { LinkWallet } from "./LinkWallet";
import type { TelegramUser } from "../shared/types";

function WalletConnector() {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
      <TGLogin onAuth={setTgUser} />
      <LinkWallet tgUser={tgUser} />
    </div>
  );
}

export default WalletConnector;
