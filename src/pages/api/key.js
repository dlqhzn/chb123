const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST 요청을 처리하는 API 엔드포인트
app.post('/Donation/:userName', (req, res) => {
  const { userName } = req.params;
  const { title } = req.body;

  // 입력받은 사용자 이름과 title 값을 기반으로 응답 생성
  const response = {
    userName,
    title,
    message: `Donation page created for ${userName} with title: ${title}`
  };

  res.status(200).json(response);
});

// 서버를 3000 포트에서 실행
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});