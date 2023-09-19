import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SystemProgram, Transaction, TransactionMessage, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { FC, useCallback, useState } from 'react';
import { notify } from "../utils/notifications";
import { TOKEN_PROGRAM_ID, createTransferInstruction } from "@solana/spl-token"; // SPL 토큰 관련 모듈 추가

export const SendVersionedTransaction: FC = () => {
    
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [userName, setUserName] = useState("");
    const [amount, setAmount] = useState(0); // 선택한 토큰의 양을 저장할 상태 변수
    const [selectedToken, setSelectedToken] = useState("SOL"); // 선택한 토큰을 저장할 상태 변수

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedToken(event.target.value);
    };

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        let signature: TransactionSignature = '';
        try {
            const recipientAddress = new PublicKey("BvpyYrbXH9aAY6ouQchotADBMyhLysX9a3DkkqkE4QCM");

            // Create instructions to send, in this case a simple transfer
            const instructions = [
                createTransferInstruction(
                    TOKEN_PROGRAM_ID,
                    publicKey,
                    recipientAddress,
                    amount, // 선택한 토큰의 양을 사용
                   
                ),
            ];

            // Get the latest block hash to use on our transaction and confirmation
            let latestBlockhash = await connection.getLatestBlockhash()

            // Create a new TransactionMessage with version and compile it to version 0
            const messageV0 = new TransactionMessage({
                payerKey: publicKey,
                recentBlockhash: latestBlockhash.blockhash,
                instructions,
            }).compileToV0Message();

            // Create a new VersionedTransaction to support the v0 message
            const transaction = new VersionedTransaction(messageV0)

            // Send transaction and await for signature
            signature = await sendTransaction(transaction, connection);

            // Await for confirmation
            await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

            console.log(signature);
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });
        } catch (error: any) {
            notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, notify, connection, sendTransaction, amount, selectedToken]);

    return (
        <div className="">
            <div className="">
                <h1 className='text-[36px] font-semibold mt-10 ml-12 '>Donation to {userName}
                </h1>
                <div className="flex mt-10">
                    <div className='mt-3 ml-12 flex w-20'>Name</div>
                    <div className="rounded-md w-144 p-3 ml-6 mr-8" style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
                        <input
                            placeholder="name"
                            name="name"
                            type="text"
                            className="bg-transparent border-none text-white w-full focus:outline-none "
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex mt-3'>
                        <div className='mt-3 ml-15 flex w-20'>Amount</div>
                        <div className="rounded-md w-144 p-3 ml-6 mr-3" style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
                            <input type="number" step="any" value={amount} onChange={handleAmountChange} className='bg-transparent border-none text-white w-full focus:outline-none' />
                        </div>
                        <select className="rounded-md w-36 p-3 mr-8" style={{ backgroundColor: 'rgb(49, 49, 49)' }} onChange={handleTokenChange} value={selectedToken}>
                            <option value="SOL">Sol</option>
                            <option value="USDC">usdc</option>
                            <option value="CHB">chb</option>
                        </select>
                    </div>
                </div>

                <div className="flex mt-3">
                    <div className='mt-3 ml-12 flex w-20 h-36 items-center'>Massage</div>
                    <div className="rounded-md w-144 p-3 ml-6 mr-8" style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
                        <textarea
                            name="name"
                            rows={4}
                            className="bg-transparent border-none text-white w-full h-full resize-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className='mt-3 ml-12 flex w-20'>TTS Voice</div>
                    <div className="rounded-md w-144 p-3 ml-6 mr-8 " style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
                        <input
                            name="name"
                            type="text"
                            className="bg-transparent border-none text-white w-full focus:outline-none "
                        />
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='flex mt-3  ' style={{ marginLeft: "140px" }}>
                <button
                    className="group rounded-md w-144 p-3 mr-8" style={{ backgroundColor: 'rgb(41, 214, 152)' }}
                    onClick={onClick} disabled={!publicKey}>
                    <div className="hidden group-disabled:block ">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden" >
                        Donation
                    </span>
                </button>
            </div>
        </div>
    );
};
