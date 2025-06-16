import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WalletConnection from "./components/Tonconnect";
import { SendTransactionButton } from "./components/Pay";
import WalletConnector from "./components/WalletConnector";

const manifestUrl =
  "https://aquamarine-random-peacock-321.mypinata.cloud/ipfs/bafkreid4a6fdnzi2fn6cfhhubs6wvz3zhwibzkpkivcmvynj34is4klhim";

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
        <div className="w-full max-w-md space-y-6">
          <WalletConnection />
          <SendTransactionButton />
          <WalletConnector />
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
