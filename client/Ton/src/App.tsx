import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WalletConnection from "./components/Tonconnect";
import { SendTransactionButton } from "./components/Pay";
import WalletConnector from "./components/WalletConnector";

const manifestUrl =
  "https://aquamarine-random-peacock-321.mypinata.cloud/ipfs/bafkreid4a6fdnzi2fn6cfhhubs6wvz3zhwibzkpkivcmvynj34is4klhim";

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="h-[500px] w-[500px] flex flex-col gap-4 items-center justify-center bg-gray-900 p-6">
        <WalletConnection />
        <SendTransactionButton />
        <WalletConnector />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
