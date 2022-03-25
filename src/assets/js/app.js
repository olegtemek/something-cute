const btnFirst = document.getElementById('btnFirst')
const btnSecond = document.getElementById('btnSecond')
const header = document.getElementById('header')
const first = document.getElementById('first')
const second = document.getElementById('second')
const firstMethodStart = document.getElementById('firstMethodStart')
var test = 0;
btnFirst.addEventListener('click', () => {
  document.querySelector('#test>span').innerHTML = ''
  first.style.display = 'block'
  setTimeout(() => {
    header.classList.add('active')
    first.classList.add('active');
  }, 200);
})
document.getElementById('firstBtnBack').addEventListener('click', () => {

  header.classList.remove('active')
  first.classList.remove('active');
  document.getElementById('counts').innerHTML = '';
  first.querySelector('input').value = ''
  setTimeout(() => {
    first.style.display = 'none'
  }, 200);
})

firstMethodStart.addEventListener('click', () => {
  document.getElementById('counts').innerHTML = '';
  let input = first.querySelector('input')
  let inputVal = input.value
  if (inputVal == '') {
    input.classList.add('error')
  }
  else if (inputVal > 200) {
    input.classList.add('error')
    document.getElementById('someError').classList.add('error')
  }
  else {
    test++;
    input.classList.remove('error')
    let countArr = []
    for (let i = 0; i < inputVal; i++) {
      countArr[i] = '&#127801;'

    }
    for (let j = 0; j < countArr.length; j++) {
      document.getElementById('counts').innerHTML += countArr[j]
    }
  }
  return test;
})

document.getElementById('fake').addEventListener('click', () => {
  document.getElementById('fakeError').innerHTML = 'ладно, это пранк)'
  setTimeout(() => {
    setTimeout(() => {
      location.href = 'https://www.meme-arsenal.com/memes/293afeb4a76d713efa3177c4cc434777.jpg';
    }, 1000)
  }, 1000)
})

btnSecond.addEventListener('click', () => {
  if (test == 1) {
    second.style.display = 'block'
    setTimeout(() => {
      header.classList.add('active')
      second.classList.add('active');
    }, 200);
  } else {
    document.querySelector('#test>span').innerHTML = 'Сначала пройди первый вариант'
  }
})
