import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";
import { createTransferInstruction } from "@solana/spl-token";
import React, { FC, useCallback } from "react";

const TOKEN_ACCOUNT_ADDRESS = new PublicKey("YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz");
const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

export const SendSPLTokenToAddress: FC = () => {
    const { connection } = useConnection(); 
    const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      createTransferInstruction(
        TOKEN_PROGRAM_ID,
        TOKEN_ACCOUNT_ADDRESS,
        publicKey,
        1,
        []
      )
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection]);

  return (
    <button
      className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
      onClick={onClick}
      disabled={!publicKey}
    >
      Send 1 lamport to a random address!
    </button>
  );
};
