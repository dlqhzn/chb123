import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



export const HomeView: FC = ({ }) => {


  return (
    <div>
      <div className="Forms-list  box-border flex-auto h-144 w-400 rounded-lg text-white MB-1" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
        <div className="max-h-144 overflow-auto">


          <div className="flex flex-row place-items-center ml-5 mt-12">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <Link href="Donation/Leeluri" className='h-full'>
                <button className="Donationbutton mr-4">Donation</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <Link href="Donation/Leeluri" className='h-full'>
                <button className="Donationbutton mr-4">Donation</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <Link href="Donation/Leeluri" className='h-full'>
                <button className="Donationbutton mr-4">Donation</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <Link href="Donation/Leeluri" className='h-full'>
                <button className="Donationbutton mr-4">Donation</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <button className="Donationbutton mr-4"><Link href="/">Donation</Link></button>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <button className="Donationbutton mr-4"><Link href="/">Donation</Link></button>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <button className="Donationbutton mr-4"><Link href="/">Donation</Link></button>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <button className="Donationbutton mr-4"><Link href="/">Donation</Link></button>
            </div>
          </div>

          <div className="flex flex-row place-items-center ml-5 mt-5">
            <div className="circle-image basis-1/8">
              <Image src="/lee.png" alt="이미지" width={100} height={0} />
            </div>
            <div className='basis-1/4 flex flex-col justify-center'>
              <span className="text-[12px] mb-[-0.6rem]">Forms</span>
              <span className="text-[32px] ">Lee Luri</span>
            </div>
            <div className='grow ' />
            <div>
              <button className="Donationbutton mr-4"><Link href="/">Donation</Link></button>
            </div>
          </div>


        

        </div>
      </div>
    </div>
  );
}  