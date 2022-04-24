![](https://velog.velcdn.com/images/hongdol/post/a32fca72-8df6-46c7-a168-1e2caddf8a8d/image.png)

# 이번주 내용
와이어 프레임과 구현해야할 기능 요구 사항을 만족한 인스타그램 비슷한 사이트를 만드는 것이다. 

다음 단계로 구성되어있다. 
LV1 와이어프레임과 기능 구현
LV2 백 엔드와 연동 API 서버 통신
LV3 프로젝트 최적화(코드 스플리팅, 레이지 로딩)
LV4 Typescript 적용하기

# 배운 내용
1. POST MAN Mock API서버에 대해 배웠고 서버가 아직 완성히 안됐을때 API문서를 토대로 가짜서버를 만들고 통신했다. 
2. Axios 사용법
Axios를 Instance로 만들고 모듈화를 하였다.

axios.js
```js
import axios from 'axios';
import { ip } from '../../common/ip';

//인스턴스 생성
const apiClicent = axios.create({
  baseURL: ip,
});

 //로그인
const loginAxios = async (id, pw) => {
  const string = { username: id, pw: pw };
  const jsonData = JSON.stringify(string);
  apiClicent.defaults.headers['Content-Type'] = 'application/json';
  try {
    const res = await apiClicent.post('login', jsonData);

    if (res.status === 200) {
      // 서버에서 CORS설정과 headers에 authorization을 허용해야 
      // 클라이언트에서 authorization을 가져올 수 있음 
      // 허용하지 않으면 기본 헤더값만 가져올 수 있음
      sessionStorage.setItem('token', res.headers.authorization);
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    alert('로그인 실패');
  }
};
```

login하는 미들웨어
```js
//로그인
const loginAPI = (id, pw, navigate) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.loginAxios(id, pw);
    if (result) {
      dispatch(
        setUser({
          user: id,
          isLogin: true,
        })
      );
      navigate();
    }
  };
};

```
3. JWT 토큰으로 로그인하고 토큰의 데이터 확인하는 법
헤더에 'Aut
```js

//게시글 한개 조회
const postAxios = async (postId) => {
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    const res = await apiClicent.get(`posts/${postId}`);
    return res;
  } catch (error) {
    console.error(error);
    alert('조회 실패');
  }
};
```

4. 이미지를 multipart/form-data로 서버에 보내서 저장하고 받아오기
```js
  //파일선택
  const selectFile = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    setSendImg(file); //서버에 보낼 값 파일객체를 보내야함
    //(서버 설정이 파일객체로 되어있음)
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result); //미리보기 img태그에 넣는 값
    };
  };
```

```js
//게시글 작성
const postWriteAxios = async (picture, content) => {
  apiClicent.defaults.headers['Content-Type'] = 'multipart/form-data';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');
  const frm = new FormData();
  frm.append('picture', picture);
  frm.append('content', content);

  try {
    const res = await apiClicent.post('posts', frm);
    return res.data;
  } catch (error) {
    console.error(error);
    alert('작성 실패');
  }
};
```
  



5. 이미지 binaryString을 다시 File객체로 만들기
서버에서 "/9j/4AAQSkZJRg..." 이런식으로 binaryString을 보내고 있고
우리가 다시 img태그에 넣으려면 "data:image/jpeg;base64," 앞에 이걸 붙여야 된다.
> data:image/jpeg;base64,/9j/4AAQSkZJRg...


```js
dataURLtoFile(
          `data:image/png;base64,${res.data.picture}`,
          '수지.png'
        );

//File객체로 바꿔주는 코드
 function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
```



[전체코드 보러가기](https://github.com/gusdas/Magazine)
