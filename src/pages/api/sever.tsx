import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// 미들웨어 추가
app.use(express.json());
const checkPublicKeyOnServer = async () => {
  try {
    // 실제 서버로 publicKey 존재 여부를 요청
    const response = await fetch('/api/checkPublicKey'); // 서버의 실제 API 엔드포인트로 변경해야 함
    const data = await response.json();
    
    // 서버로부터 받은 결과값(data.exists) 반환
    return data.exists; // data.exists가 true 또는 false일 것으로 가정
  } catch (error) {
    console.error('Error checking publicKey on server:', error);
    return false; // 에러 발생 시 기본값으로 false 반환
  }
};


// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
