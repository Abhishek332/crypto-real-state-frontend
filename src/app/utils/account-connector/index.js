import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const AccountConnector = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default AccountConnector;
