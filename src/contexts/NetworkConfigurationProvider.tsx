import { useLocalStorage } from '@solana/wallet-adapter-react';
import { createContext, FC, ReactNode, useContext } from 'react';

const solana = require('@solana/web3.js');
const connection = new solana.Connection("https://blissful-blue-ensemble.solana-mainnet.discover.quiknode.pro/4b46c5f0d4f758922251879ca8728f9220816185/");
connection.getVersion().then(response => console.log(response));
const endpoint = process.env.QUICKNODE_ENDPOINT;


export interface NetworkConfigurationState {
    networkConfiguration: string;
    setNetworkConfiguration(networkConfiguration: string): void;
}

export const NetworkConfigurationContext = createContext<NetworkConfigurationState>({} as NetworkConfigurationState);

export function useNetworkConfiguration(): NetworkConfigurationState {
    return useContext(NetworkConfigurationContext);
}

export const NetworkConfigurationProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [networkConfiguration, setNetworkConfiguration] = useLocalStorage("network", "mainnet-beta");



    return (
        <NetworkConfigurationContext.Provider value={{ networkConfiguration, setNetworkConfiguration }}>{children}</NetworkConfigurationContext.Provider>
    );
};
