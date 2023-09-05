import { FC } from "react";
import { SignMessage } from '../../../components/SignMessage';
import { SendTransaction } from '../../../components/SendTransaction';
import { SendVersionedTransaction } from '../../../components/SendVersionedTransaction';
import { SendSPLTokenToAddress } from'../../../components/chb';
import Image from 'next/image';

export const DonationLeeluriView: FC = ({ }) => {
  return (
    <div>
    <div className="flex">
      <div className=" box-border flex-auto rounded-l-2xl  h-144 w-72 Left-to-right pl-6 pt-12"  style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
        <div className="flex items-center justify-center" style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'white'}}>
          <Image src="/lee.png" alt="이미지" width={100} height={100} />
       </div>
        <div className="pt-4">
          <span className="text-[24px] font-semibold">Lee Luri</span><br/>
          <span className="text-[12px] font-medium"> Thank you for watching</span>
          <div className="flex flex-row gap-3 pt-2">
          <a><Image src="/i.webp" alt="트위치" width={30} height={10} /></a>
          <a><Image src="/t.webp" alt="트위터" width={30} height={10} /></a>
          <a><Image src="/f.webp" alt="유튜브" width={30} height={10} /></a>
          </div>
        </div>
      </div>
     <div className="Forms-list  box-border flex-auto h-144 w-400 rounded-2xl text-white MB-1 relative -left-6" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
         <SignMessage />
          <SendVersionedTransaction />
          <SendSPLTokenToAddress/>
      </div>
    </div>
    </div>
  );
};

