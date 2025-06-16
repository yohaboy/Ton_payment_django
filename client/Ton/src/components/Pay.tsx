import { useTonConnectUI } from "@tonconnect/ui-react";
import React from "react";

export const SendTransactionButton: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  const handleSend = async () => {
    try {
      if (!tonConnectUI.connected) {
        throw new Error("Wallet not connected");
      }

      await tonConnectUI.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 300,
        messages: [
          {
            address: "UQBBDwKtHkZpVNR9TRQxxgEPMz1jexpZ3YU58eYG5de8oXmx",
            amount: "1000000000",
          },
        ],
      });

      alert("Transaction sent!");
    } catch (error) {
      alert(
        "Failed: " + (error instanceof Error ? error.message : String(error))
      );
    }
  };

  return (
    <button
      onClick={handleSend}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors font-medium"
    >
      Send 1 TON
    </button>
  );
};
