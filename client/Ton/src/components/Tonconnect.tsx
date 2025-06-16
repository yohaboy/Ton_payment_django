import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import React from "react";

const WalletConnection: React.FC = () => {
  const wallet = useTonWallet();

  return (
    <div className="bg-black shadow-lg border border-gray-200 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        TON Connect Demo
      </h2>
      <TonConnectButton />
      {wallet?.device.appName && (
        <p className="mt-4 text-sm text-gray-500">
          Connected: {wallet.device.appName}
        </p>
      )}
    </div>
  );
};

export default WalletConnection;
