import { data } from './data.js';

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// DOM 요소 선택
const body = document.body;
const container = document.querySelector('.container');
const nickNameElement = document.querySelector('.nickName');
const visualImage = document.querySelector('.visual img');
const navList = document.querySelector('.nav ul');

// 배경색 변경 함수 (컨테이너와 body의 배경색 변경)
function setBgColor(index) {
  const [colorA, colorB = '#000'] = data[index].color;
  const gradient = `linear-gradient(to bottom, ${colorA}, ${colorB})`;

  container.style.background = gradient;
  body.style.background = gradient;
}

// 메인 이미지 변경 함수
function setImage(index) {
  visualImage.src = `./assets/${data[index].name}.jpeg`;
  visualImage.alt = data[index].alt;
}

// 닉네임 텍스트 변경 함수
function setNameText(index) {
  nickNameElement.textContent = data[index].name;
}

// 이벤트 처리
function handleThumbnailClick(event) {
  const button = event.target.closest('button');
  const listItem = event.target.closest('li');

  if (button && listItem) {
    const index = parseInt(listItem.dataset.index, 10) - 1;

    navList
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('is-active'));
    listItem.classList.add('is-active');

    setBgColor(index);
    setImage(index);
    setNameText(index);
  }
}

// 이벤트 위임 설정
navList.addEventListener('click', handleThumbnailClick);
