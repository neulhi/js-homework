# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

# 이하늘 과제 2

## 네이버 로그인 페이지 구현 ✅

### 요구사항

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

---


### 내가 생각한 절차
1. input창을 클릭하거나 값이 틀리면 userEmailError, userPasswordError가 화면에 표시 되게한다.
2. 값이 맞는지 확인하는 절차 추가
3. 아이디와 비밀번호가 일치하다면 welcome.html로 이동
4. 서버 통신이 끊겼을 때의 절차 추가
5. 상태 변수 관리가 뭘까?

---

### 1. html DOM 조작을 위한 변수들

```js
const idInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const errorMessage = document.querySelectorAll('.error-message');
const btn = document.querySelector('.btn-login');
```
---

### 2. 에러 메세지 상태 변경

```js
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
```
이벤트 리스너는 잘 걸린 거 같은데 에러를 해결하지 못했습니다...

---

### 3. 아이디, 비밀번호 입력값이 조건과 일치하다면 다음 페이지(welcome.html)로 이동
### 4. 서버와 통신이 끊겼을때 사용자에게 알려주는 메세지

```js
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
```
일단 이렇게 하면 입력값이 일치 하면 버튼을 안 눌러도 바로 다음페이지로 이동이 돼버렸다 그래서 
로그인 버튼을 클릭하면 다음페이지로 이동하게 하고 싶었으나 실패!!   
try..catch문도 조건이 잘못된 건지 실패..!!
loginInput에서 조건문을 빼도 버튼 함수가 동작하지 않았지만 에러페이지 보단 **Welcome 😀** 보고싶어 그냥 바로 넘어가게 놔뒀습니다.

```js
btn.addEventListener('click', function () {
  if (idInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  }
});
```
---

### 5. 함수 실행부
```js
idInput.addEventListener('click', onClick);
pwInput.addEventListener('click', onClick);
idInput.addEventListener('input', loginInput);
pwInput.addEventListener('input', loginInput);
```
---

### 회고
제가 생각하는 프로그래밍적 사고는 문제를 봤을때 해결하는 순서도를 그리고 절차를 잘게 나누는 거라고 이해했습니다.  
그 다음 생각한 절차를 코드로 작성하는 건데... 현재 상태를 알고 싶어 수업 때 작성한 코드들만 참고하며  
과제를 구현해 보려고 노력했지만 지금까지 나간 학습 진도를 제대로 습득하지 못해 사고가 잘되지 않아 답답함을 많이 느꼈습니다.😭  
바닐라 프로젝트가 12월 9일부터 시작이던데 같은 팀이 되는 사람들에게 민폐가 되지 않고 스스로도 무기력함을 느끼고 싶지 않고 잘 하고 싶기에 이걸 작은 목표로 설정하여 파이팅🔥 해보겠습니다.


### 과제 2 GitHub URL
- [naver_login](https://neulhi.github.io/js-homework/naver_login/index.html "naver_login")




