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
        validUntil: Math.floor(Date.now() / 1000) + 300, // 5 minutes
        messages: [
          {
            address: "EQABC...123", // Recipient address
            amount: "1000000000", // 1 TON in nanoTON
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

  return <button onClick={handleSend}>Send 1 TON</button>;
};
