import React, { FC, useEffect, useRef, useState } from "react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';


export const MysettingView: FC = ({ }) => {

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageReplace = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setImageFile(file);
      }
    };
    input.click();
  };

  return (

    <div className="box-border flex-auto h-300 w-300 rounded-lg text-white MB-1" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>

<form name="mysetting" action="Mysetting/[userName].tsx" method="phost">
      <div style={{ display: "flex", alignItems: "center" }}>
        {imageFile ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Selected Image"
            style={{ width: '150px', height: '150px' }}
            className="rounded-full ml-6 mt-6"
          />
        ) : (
          <button
            onClick={handleImageReplace}
            className="ml-6 mt-6 bg-white text-black font-bold rounded-full focus:outline-none font-[100] text-[50px] content-center"
            style={{ width: '150px', height: '150px' }}
            
          >
            +
          </button>
        )}
        <div className="ml-10">
          <div className="text-[36px]"> Picture </div>
          <div className="text-[12px] opacity-75">A photo of 98x98 pixels or larger and 4 MB or smaller is<br/>recommended, Use PNG or GIF (not animated GIF) files
          </div>
          <button onClick={handleImageReplace} className="text-[16px] mt-4 mr-6">
            Change
          </button>

          <button
        onClick={() => setImageFile(null)} // 이미지 삭제 버튼 클릭 시 이미지 제거
        className="text-[16px] mt-4"
      >
        Remove
      </button>

        </div>
      </div>

      <div className="rounded-md box-content h3 w-150 p-4 border ml-6 mt-6 mr-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">Name</div>
            <div className="relative">
              <input
              placeholder="name"
              name="name"
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
              />
            </div>
          </div>

          <div className="rounded-md box-content h3 w-150 p-4 border ml-6 mt-6 mr-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">streaming</div>
            <div className="relative">
              <input
              placeholder="streaming"
              name="streaming"
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
              />
            </div>
          </div>

          <div className="rounded-md box-content h-3 w-150 p-4 border ml-6 mt-6 mr-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">YouTube</div>
            <div className="relative">
              <input
              placeholder="YouTube"
              name="YouTube"
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
              />
            </div>
          </div>

          <div className="rounded-md box-content h-3 w-150 p-4 border ml-6 mt-6 mr-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">social media</div>
              <input
              placeholder="social media"
              name="social media"
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
              />
          </div>



          <div className="rounded-md box-content h-36 w-150 p-4 border ml-6 mt-6 mr-6 pt-1 pb-3 flex flex-col justify-start" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
  <div className="text-white text-[12px] mb-0">Explanation</div>
  <div className="flex flex-col justify-start h-full">
    <textarea
    name="Explanation"
      rows={4}
      className="bg-transparent border-none text-white w-full h-full resize-none focus:outline-none"
    ></textarea>
  </div>
</div>
</form>

</div>





  );
};
