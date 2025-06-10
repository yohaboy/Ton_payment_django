import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import React from "react";

const WalletConnection: React.FC = () => {
  const wallet = useTonWallet();

  return (
    <div style={{ padding: "20px" }}>
      <h2>TON Connect Demo</h2>
      <TonConnectButton />

      {wallet && (
        <div style={{ marginTop: "20px" }}>
          <p>Connected wallet: {wallet.device.appName}</p>
          <p>Address: {wallet.account.address}</p>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;
