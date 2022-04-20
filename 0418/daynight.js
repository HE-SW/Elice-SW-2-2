function night() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = 'white';
  }
}
export function day() {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = 'black';
  }
}
export function dayNight(mode) {
  if (mode === 'night') {
    night();
  } else {
    day();
  }
}
import { yuanToWon, yenToWon } from './exchange/asia.js';
import dollarToWon from './exchange/dollar.js';
import euroToWon from './exchange/euro.js';
// 아래 코드가 수행될 수 있도록 exchange 폴더에서 모듈을 import 하세요.
console.log(euroToWon(100));
console.log(dollarToWon(200));
console.log(yuanToWon(300));
console.log(yenToWon(400));
