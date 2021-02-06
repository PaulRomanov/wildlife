//очищает поле ввода Email

document.getElementById("clearButton").onclick = function (e) {
  document.getElementById("textInput").value = "";
}

// СЛАЙДЕР START


// нахожу элементы
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let slideImg1 = document.getElementById('slide-img1');
let slideImg2 = document.getElementById('slide-img2');
let slideImg3 = document.getElementById('slide-img3');


// привязываю обработчики событий
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

//создаю массив с картинками
let imgUrl = [];
imgUrl.push("./assets/images/deer.png");
imgUrl.push("./assets/images/squirrel.png");
imgUrl.push("./assets/images/bird.png");
imgUrl.push("./assets/images/fox.jpg");
imgUrl.push("./assets/images/bear.jpg");
imgUrl.push("./assets/images/wolf.jpg");


let currentImgIndex = 0;
slideImg1.src = imgUrl[currentImgIndex];
slideImg2.src = imgUrl[currentImgIndex + 1];
slideImg3.src = imgUrl[currentImgIndex + 2];

prevBtn.disabled = true;

function onPrevBtnClick() {
  currentImgIndex--;
  slideImg1.src = imgUrl[currentImgIndex];
  slideImg2.src = imgUrl[currentImgIndex + 1];
  slideImg3.src = imgUrl[currentImgIndex + 2];
  nextBtn.disabled = false; //раздизэйбливает кнопку слева, при нажатии хоть раз на правую
  if (currentImgIndex === 0) {
    prevBtn.disabled = true; //останавливает возможность нажатия
  }
};

function onNextBtnClick() {

  prevBtn.disabled = false; //раздизэйбливает кнопку справа, при нажатии хоть раз на левую
  if (currentImgIndex === (imgUrl.length - 4)) {
    nextBtn.disabled = true; //останавливает возможность нажатия
  }
  currentImgIndex++;
  slideImg1.src = imgUrl[currentImgIndex];
  slideImg2.src = imgUrl[currentImgIndex + 1];
  slideImg3.src = imgUrl[currentImgIndex + 2];
};

//СЛАЙДЕР FINISH