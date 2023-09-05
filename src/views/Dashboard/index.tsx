import { FC } from "react";
import Image from "next/image";
import sol from "../../../public/sol.png";
import chb from "../../../public/chb.png";
import usdc from "../../../public/usdc.png";

export const DashboardView: FC = ({ }) => {

  return (
    <div>

      <div className="text-[24px]">
        Total Donation Amount (Give)
      </div>

      <div className="box-border flex-auto h-40 w-144 rounded-lg text-white MB-1 mt-2" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
        <div className="flex items-center">

          <div className=" box-border rounded-lg h-24 w-24 mt-8 ml-8" style={{ backgroundColor: 'rgb(35, 35, 35)' }} />


          <div className="flex items-center ml-20 gap-12">
            <Image src={usdc}
              alt="usdc Image"
              width={60}
              height={60}

            />
            <Image src={chb}
              alt="chb Image"
              className="rounded-full"
              width={60}
              height={60}

            />
            <Image src={sol}
              alt="sol Image"
              className="rounded-full"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>

      <div className="text-[24px] mt-12">
        Donation List (Give)
      </div>

      <div className="box-border flex-auto h-96 w-144 rounded-lg text-white MB-1 mt-2" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
        <div className="flex items-center">

          

         
        </div>
      </div>


    <div className="" style={{left:'1100px', top: '200px', position: 'absolute'}}>
      <div className="text-[24px]">
        Total Donation Amount (Take)
      </div>

      <div className="box-border flex-auto h-40 w-144 rounded-lg text-white MB-1 mt-2" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
        <div className="flex items-center">

          <div className=" box-border rounded-lg h-24 w-24 mt-8 ml-8" style={{ backgroundColor: 'rgb(35, 35, 35)' }} />


          <div className="flex items-center ml-20 gap-12">
            <Image src={usdc}
              alt="usdc Image"
              width={60}
              height={60}

            />
            <Image src={chb}
              alt="chb Image"
              className="rounded-full"
              width={60}
              height={60}

            />
            <Image src={sol}
              alt="sol Image"
              className="rounded-full"
              width={60}
              height={60}
            />
          </div>



        </div>

      </div>  

      <div className="text-[24px] mt-12">
        Donation List (Take)
      </div>

      <div className="box-border flex-auto h-96 w-144 rounded-lg text-white MB-1 mt-2" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
        <div className="flex items-center">

          

         
        </div>
      </div>

      </div>





    </div>
  );
};
