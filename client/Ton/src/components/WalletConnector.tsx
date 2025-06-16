import { useState } from "react";
import TGLogin from "./TGLogin";
import { LinkWallet } from "./LinkWallet";
import type { TelegramUser } from "../shared/types";

function WalletConnector() {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);

  return (
    <div className="bg-black shadow-lg border border-gray-800 rounded-2xl p-8 space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Connect Your Accounts
      </h2>

      {!tgUser ? (
        <div className="text-center space-y-4">
          <p className="text-gray-300">First, login with Telegram</p>
          <TGLogin onAuth={setTgUser} />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
            <p className="text-gray-300 text-sm mb-1">User Info</p>
            <p className="font-medium text-white">
              {tgUser.first_name} {tgUser.last_name && tgUser.last_name}
            </p>
            {tgUser.username && (
              <p className="text-sm text-gray-400 mt-1">@{tgUser.username}</p>
            )}
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-300">Link your wallet & account</p>
            <LinkWallet tgUser={tgUser} />
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletConnector;
