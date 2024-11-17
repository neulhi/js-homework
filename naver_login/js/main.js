// 요구사항

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

// 내가 생각한 절차
/* 
1. input창을 클릭하면 isis--invalid를 추가하여 화면에 표시
2. 아이디와 비밀번호 조건 처리 후 값이 맞는지 확인
3. 아이디와 비밀번호가 일치하다면 welcome.html로 이동
4. 서버 통신이 끊겼을 때의 절차 추가
5. 상태 변수 관리가 뭘까?
 */

// email 조건 처리
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// pw 조건 처리
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// html DOM 조작을 위한 변수들
const idInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const errorMessage = document.querySelectorAll('.error-message');
const btn = document.querySelector('.btn-login');

// 에러 메세지 상태 변경
const onClick = function () {

  if (!emailReg(idInput)) {
    errorMessage.classList.add('is--invalid');
  } else {
    errorMessage.classList.remove('is--invalid');
  }

  if (!pwReg(pwInput)) {
    errorMessage.classList.add('is--invalid');
  } else {
    errorMessage.classList.remove('is--invalid');
  }
};

// 아이디, 비밀번호 입력값이 조건과 일치하다면 다음 페이지(welcome.html)로 이동
function loginInput() {
  if (idInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  }

  // 서버와 통신이 끊겼을때 사용자에게 알려주는 메세지
  if (!user.id || !user.pw) {
    try {
      throw new ReferenceError('해당 키 값이 존재하지 않습니다.');
    } catch (error) {
      console.log('error!!');
      console.log(error);

      document.body.innerHTML = '404 not found🥺';
    }
  }
}

// 함수 실행부
idInput.addEventListener('click', onClick);
pwInput.addEventListener('click', onClick);
idInput.addEventListener('input', loginInput);
pwInput.addEventListener('input', loginInput);

// 로그인 버튼을 클릭했을 때 다음 페이지(welcome.html)로 이동
btn.addEventListener('click', function () {
  if (idInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  }
});

