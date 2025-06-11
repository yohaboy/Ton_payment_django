import { useState } from "react";
import TGLogin from "./TGLogin";
import { LinkWallet } from "./LinkWallet";
import type { TelegramUser } from "../shared/types";

function WalletConnector() {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);

  return (
    <div>
      <TGLogin onAuth={setTgUser} />
      <LinkWallet tgUser={tgUser} />
    </div>
  );
}

export default WalletConnector;
