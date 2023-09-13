import jwt from 'jsonwebtoken';
import { SolanaWallet } from "@web3auth/solana-provider";
import { Web3Auth } from "@web3auth/modal";
import { NextAuth } from "next-auth";
import Providers from "next-auth/providers";

const secret = process.env.JWT_SECRET;

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Solana Wallet",
      credentials: {
        publicKey: { label: "Public Key", type: "text" },
      },
      authorize: async (credentials) => {
        try {
          const web3auth = new Web3Auth({
            clientId: "YOUR_WEB3AUTH_CLIENT_ID", 
          });
          await web3auth.initModal();

          const web3authProvider = await web3auth.connect();
          const solanaWallet = new SolanaWallet(web3authProvider);

          const isValid = await solanaWallet.validatePublicKey(
            credentials.publicKey
          );

          if (isValid) {
            const token = jwt.sign({ publicKey: credentials.publicKey }, secret, {
              expiresIn: '1d', // Adjust expiration as needed
            });

            return Promise.resolve({ token });
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
