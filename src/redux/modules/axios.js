import axios from 'axios';
import { ip } from '../../common/ip';

//인스턴스 생성
const apiClicent = axios.create({
  baseURL: ip,
});

//------------------------사용자-----------------------//
//회원가입
const registerAxios = async (id, pw, nickname) => {
  const string = { username: id, pw: pw, nickname: nickname };
  const jsonData = JSON.stringify(string);

  try {
    apiClicent.defaults.headers['Content-Type'] = 'application/json';
    const res = await apiClicent.post('register', jsonData);

    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

//로그인
const loginAxios = async (id, pw) => {
  const string = { username: id, pw: pw };
  const jsonData = JSON.stringify(string);
  apiClicent.defaults.headers['Content-Type'] = 'application/json';
  try {
    const res = await apiClicent.post('login', jsonData);

    if (res.status === 200) {
      sessionStorage.setItem('token', res.headers.authorization);
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

//로그아웃
const logoutAxios = async () => {
  // apiClicent.defaults.headers['Content-Type'] = 'application/json';
  try {
    const res = await apiClicent.post('logout');

    return res;
  } catch (error) {
    console.error(error);
  }
};

//------------------------게시글-----------------------//
//게시글 목록 전체 조회
const postsAxios = async (currentPage) => {
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    // const res = await apiClicent.get(`posts?page=${currentPage}&size=3`);
    const res = await apiClicent.get('posts');

    if (res.status === 200) {
      const sendData = {
        last: res.data.posts.last,
        posts: res.data.posts.content,
        pageNum: res.data.posts.number,
      };
      return sendData;
    }
  } catch (error) {
    console.error(error);
  }
};

//게시글 한개 조회
const postAxios = async (postId) => {
  // apiClicent.defaults.headers['Content-Type'] = 'application/json';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    const res = await apiClicent.get(`posts/${postId}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

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
  }
};

//게시글 수정
const postUpdateAxios = async (postId, picture, content) => {
  apiClicent.defaults.headers['Content-Type'] = 'multipart/form-data';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');
  const frm = new FormData();
  frm.append('picture', picture);
  frm.append('content', content);

  try {
    const res = await apiClicent.patch(`posts/${postId}`, frm);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//게시글 삭제
const postDeleteAxios = async (postId) => {
  // apiClicent.defaults.headers['Content-Type'] = 'application/json';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    const res = await apiClicent.post(`posts/${postId}/delete`);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//------------------------좋아요-----------------------//
//좋아요
const LikeAxios = async (postId) => {
  // apiClicent.defaults.headers['Content-Type'] = 'application/json';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    const res = await apiClicent.post(`posts/${postId}/like`);

    return res;
  } catch (error) {
    console.error(error);
  }
};

//좋아요삭제
const LikeDeleteAxios = async (postId) => {
  // apiClicent.defaults.headers['Content-Type'] = 'application/json';
  apiClicent.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token');

  try {
    const res = await apiClicent.post(`posts/${postId}/like/delete`);

    return res;
  } catch (error) {
    console.error(error);
  }
};

const axiosFunc = {
  registerAxios,
  loginAxios,
  logoutAxios,
  postsAxios,
  postAxios,
  postWriteAxios,
  postUpdateAxios,
  postDeleteAxios,
  LikeAxios,
  LikeDeleteAxios,
};

export { axiosFunc };
