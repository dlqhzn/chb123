import React, { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Link from "next/link";
import { useRouter } from "next/router";




// VolumeControl component
const VolumeControl = () => {
  const [volume, setVolume] = useState(50); // 초기 볼륨 값은 50으로 설정

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value; // 새로운 볼륨 값 가져오기
    setVolume(newVolume); // 볼륨 상태 업데이트
  };

  return (
    <div>
      <div className="p-4 ml-6 mt-6">Volume: {volume}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        style={{ width: '950px' }}
        className="p-4 ml-6"
      />
    </div>
  );
};

export const WidgetView: FC = () => {






  const { publicKey } = useWallet();
  const router = useRouter();
  const { slug } = router.query;

  const [inputValue2, setInputValue2] = useState('');
  const [donationUrlMap, setDonationUrlMap] = useState<Map<string, string>>(new Map());

  const handleInputChange7 = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;

    // 영어와 숫자만 허용하는 정규표현식을 사용하여 검사
    if (/^[a-zA-Z0-9]*$/.test(newInputValue)) {
      setInputValue2(newInputValue);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue2 && publicKey) {
      const publicKeyStr = publicKey.toBase58(); // PublicKey 객체를 문자열로 변환

      // 기존 기부 URL 삭제
      const updatedDonationUrlMap = new Map(donationUrlMap);
      if (updatedDonationUrlMap.has(publicKeyStr)) {
        updatedDonationUrlMap.delete(publicKeyStr);
      }

      // 새로운 기부 URL 추가
      updatedDonationUrlMap.set(publicKeyStr, inputValue2);
      setDonationUrlMap(updatedDonationUrlMap);

      // 이동하거나 다른 작업 수행
      router.push(`/Donation/${inputValue2}`);
    }
  };




  const [additionalContent, setAdditionalContent] = useState('');
  const [urlValue, setUrlValue] = useState("http://localhost:3000/Donation/");
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] = useState("1");
  const [searchValue2, setSearchValue2] = useState('24');

  // 나머지 입력 값들을 formValues 상태로 변경
  const [formValues, setFormValues] = useState({
    searchValue2: "",
    searchValue5: "",
    searchValue6: "",
    searchValue7: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isWalletLoggedIn, setIsWalletLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsWalletLoggedIn(!!publicKey);
  }, [publicKey]);


  // 1
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value.replace(/[^0-9]/g, ''));
  };

  // 2
  const handleInputChange2 = (event) => {
    const { value } = event.target;
    setSearchValue2(value.replace(/[^0-9]/g, ''));
  };

  // 3
  const [colorValue, setColorValue] = useState("#ffffff");
  const handleColorChange = (event) => {
    const { value } = event.target;
    setColorValue(value);
  };

  // 4
  const [colorValue2, setColorValue2] = useState("#000000");
  const handleColorChange2 = (event) => {
    const { value } = event.target;
    setColorValue2(value);
  };

  // 5
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  // 7

  const handleCopyContent = () => {
    // textAreaRef를 이용하여 내용을 복사
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }

    // inputRef를 이용하여 내용을 복사
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      alert("복사되었습니다.");
    }
  };



  // 8
  const handleInputChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, searchValue7: event.target.value });
  };

  const handleImageReplace = () => {
    // 클릭 시 파일 선택 창 열기
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

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // formValues를 백엔드 서버에 저장하는 로직 (시뮬레이션)
    // 이 예시에서는 로컬 스토리지에 저장하도록 시뮬레이션
    localStorage.setItem("formValues", JSON.stringify(formValues));
    setIsSaved(true); // 저장되었다는 상태를 true로 변경
    setTimeout(() => {
      setIsSaved(false); // 3초 후에 상태를 다시 false로 변경하여 이벤트 창을 숨김
    }, 4000);
  };



  const [widgetUrl, setWidgetUrl] = useState('');

  useEffect(() => {
    // publicKey를 서버에 보내서 URL을 받아옴
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicKey: '', // 실제 사용자의 publicKey 값을 여기에 전달해야 함
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 URL을 상태에 설정
        setWidgetUrl(data.url);
      })
      .catch((error) => {
        console.error('Error fetching widget URL:', error);
      });
  }, []);

  useEffect(() => {
    // 로그인 시 저장된 내용을 불러오는 로직 (시뮬레이션)
    const savedFormValues = JSON.parse(localStorage.getItem("formValues"));
    if (savedFormValues) {
      setFormValues(savedFormValues);
    }
  }, [isWalletLoggedIn]);

  return (
    <div>
      {isWalletLoggedIn ? (
        <div className="Forms-list  box-border flex-auto h-600 w-600 rounded-lg text-white MB-1" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {imageFile ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Selected Image"
                style={{ width: '200px', height: '200px' }}
                className="rounded-lg ml-6 mt-6"
              />
            ) : (
              <button
                onClick={handleImageReplace}
                className="ml-6 mt-6 bg-white text-black font-bold rounded-lg focus:outline-none text-[26px]"
                style={{ width: '200px', height: '200px' }}
              >
                +
              </button>
            )}
            <div className="ml-10">
              <div className="text-[36px]">Add image</div>
              <div className="text-[12px] opacity-75">(jpg.png.gif)</div>
              <button onClick={handleImageReplace} className="text-[16px] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Change Image
              </button>
            </div>
          </div>
          {/* 1 */}
          <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">Minimum Donation</div>
            <div className="relative">
              <input
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
                value={searchValue === '' ? '' : `$${searchValue}`}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* 2 */}
          <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">Minimum Donation</div>
            <div className="relative">
              <input
                type="text"
                className="bg-transparent border-none text-white w-full focus:outline-none "
                value={searchValue2 === '' ? '' : `px${searchValue2}`}
                onChange={handleInputChange2}
              />
            </div>
          </div>

          {/* 3 */}
          <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: "rgb(28, 28, 28)" }}>
            <div className="text-white text-[12px] mb-0">text Color(#6hex) : {colorValue}</div>
            <div className="relative">
              <input
                type="color"
                className="bg-transparent border-none text-white w-full focus:outline-none"
                value={colorValue}
                onChange={handleColorChange}
              />
            </div>
          </div>

          {/* 4 */}
          <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">Name, Amount Color(#6hex) : {colorValue2}</div>
            <input
              type="color"
              className="bg-transparent border-none text-white w-full focus:outline-none"
              value={colorValue2}
              onChange={handleColorChange2}
            />
          </div>

          {/* 5 */}
          <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
            <div className="text-white text-[12px] mb-0">notification sound effect</div>
            <label className="bg-transparent border-none text-white w-full focus:outline-none relative">
              <input
                type="file"
                accept="audio/*"
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
              <span className="   text-white rounded-md cursor-pointer">
                {selectedFile ? selectedFile.name : 'Upload File'}
              </span>
            </label>
          </div>
          {/* 6 */}
          <VolumeControl />

          {/* 7 */}
          <form onSubmit={handleSubmit}>
        <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
          <div className="text-white text-[12px] mb-0">Donation URL http://localhost:3000/Donation/{inputValue2}</div>
          <input
            type="text"
            className="bg-transparent border-none text-white w-full focus:outline-none"
            value={inputValue2}
            onChange={handleInputChange7}
          />
        </div>
        <Link href={`/Donation/${inputValue2}`}>Go to Donation Page</Link>
      </form>


          {/* 8 */}
          <div>

            <div className="rounded-md box-content h3 w-450 p-4 border ml-6 mt-6 pt-1 pb-3" style={{ backgroundColor: 'rgb(28, 28, 28)' }}>
              <div className="text-white text-[12px] mb-0">Widget URL</div>
              <div>{widgetUrl}</div>
            </div>

          </div>

          <div>
            <button
              onClick={handleSave}
              className="text-[16px] mt-12 ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:opacity-50"
              style={{ backgroundColor: 'rgb(38, 38, 38)', width: '150px', height: '50px' }}>
              SAVE
            </button>
          </div>


        </div>
      ) : (
        <div className="Forms-list box-border flex-auto h-600 w-600 rounded-lg text-white MB-1 bg-gray-800 flex justify-center items-center ">
          <div className="text-[26px] ">Please use it after Select Wallet</div>
        </div>
      )}
      <div style={{ position: 'fixed', top: '100px', left: '1350px', zIndex: 3 }}>
        {isSaved && (
          <span className="bg-green-500 text-white px-6 py-5 rounded text-[24px]" style={{ position: 'fixed' }}>
            Content saved
          </span>
        )}
      </div>

      <textarea
        ref={textAreaRef}
        style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        value={urlValue + setAdditionalContent}
        readOnly
      />
    </div>
  );
};

