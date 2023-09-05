import { FC } from "react";
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export const DoceView: FC = ({ }) => {

  const router = useRouter();
  const { userName } = router.query; //

  return (
    <div>

      <h1>{userName}님의 후원 페이지</h1>
      {/* 후원 페이지 내용 */}

  </div>
  );
};
