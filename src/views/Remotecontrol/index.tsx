import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useWallet } from '@solana/wallet-adapter-react';

export const RemotecontrolView: FC = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const wallet = useWallet();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const title = (event.target as HTMLFormElement).title.valueOf;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    };
    fetch(`http://localhost:3000/Donation/${userName}`, options)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const lastUserName = result.userName;
        router.push(`/read/${userName}`);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div>
      <h1>후원 페이지 생성</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={userName}
          onChange={handleInputChange}
        />
        <button type="submit">후원 페이지로 이동</button>
      </form>

      <h1>Donation</h1>
    </div>
  );
};

export default RemotecontrolView;
