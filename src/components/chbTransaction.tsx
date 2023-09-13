import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";
import { useRouter } from 'next/router';
import { TOKEN_PROGRAM_ID, createTransferInstruction } from "@solana/spl-token";

export const chbTransaction: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const router = useRouter();
    const { publicKey: recipientPublicKey } = router.query;

    const mintAddress = new PublicKey('YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz');

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        if (!recipientPublicKey) {
            notify({ type: 'error', message: `Recipient publicKey not found!` });
            console.log('error', `Recipient publicKey not found!`);
            return;
        }

        let signature: TransactionSignature = '';
        try {
            const recipientAddress = new PublicKey(recipientPublicKey as string);

            const instructions = [
                createTransferInstruction(
                    TOKEN_PROGRAM_ID,
                    mintAddress, // 변경된 부분: mintAddress로 변경
                    recipientAddress,
                    1, // 수정된 부분: 전송할 양 (단위: 토큰)
                ),
            ];

            let latestBlockhash = await connection.getLatestBlockhash();

            const transaction = new Transaction().add(...instructions);

            signature = await sendTransaction(transaction, connection);

            await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

            console.log(signature);
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });
        } catch (error: any) {
            notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, recipientPublicKey, notify, connection, sendTransaction]);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick} disabled={!publicKey}
                >
                    <div className="hidden group-disabled:block ">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden" >
                        Send Transaction
                    </span>
                </button>
            </div>
        </div>
    );
};
