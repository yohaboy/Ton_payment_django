import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import React from "react";

const WalletConnection: React.FC = () => {
  const wallet = useTonWallet();

  return (
    <div style={{ padding: "20px" }}>
      <h2>TON Connect Demo</h2>
      <TonConnectButton />
      {wallet?.device.appName}
    </div>
  );
};

export default WalletConnection;
