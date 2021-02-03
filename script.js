//очищает поле ввода Email

document.getElementById("clearButton").onclick = function(e) {
  document.getElementById("textInput").value = "";
}

// СЛАЙДЕР START


// нахожу кнопки
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// привязываю обработчики событий
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);


// проверка нажатия на кнопки
function onPrevBtnClick (){
  console.log('prev clicked');
};

function onNextBtnClick (){
  console.log('next clicked');
};
