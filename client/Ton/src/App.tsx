import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WalletConnection from "./components/Tonconnect";
import { SendTransactionButton } from "./components/Pay";
import WalletConnector from "./components/WalletConnector";

const manifestUrl =
  "https://aquamarine-random-peacock-321.mypinata.cloud/ipfs/bafkreid4a6fdnzi2fn6cfhhubs6wvz3zhwibzkpkivcmvynj34is4klhim";

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <WalletConnection />
      <SendTransactionButton />
      <WalletConnector />
    </TonConnectUIProvider>
  );
}

export default App;
