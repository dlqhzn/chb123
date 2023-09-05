import { useState } from 'react';
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import { useWallet } from '@solana/wallet-adapter-react';
import { SignMessage } from 'components/SignMessage';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const LoginPage = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isLogged, setIsLogged] = useState(false);
  const { publicKey } = useWallet();

  const handlePublicKeySubmit = async () => {
    try {
      // 로그인 후 publicKey를 서버로 전송
      // ... (publicKey 처리 로직)

      // 성공적으로 전송되면 로그인 상태 변경
      setIsLogged(true);
    } catch (error) {
      // 전송 실패 시 에러 메시지 출력
      console.error('Failed to send public key:', error);
    }
  };

  return (
    <div className=" ">
      {isLogged ? (
        <div className="">
          <h1 className="text-3xl font-bold mb-4">You are logged in!</h1>
          <SignMessage />
        </div>
      ) : (
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Login Page</h1>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer mb-4"
            onClick={handlePublicKeySubmit}
          >
            Submit Public Key
          </button>
          <SignMessage />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
