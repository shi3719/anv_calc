//100vh 브라우저 환경 커버하기
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

const numInputWraps = document.querySelectorAll('.num_input_wrap');

const inputNumZero = (inputNum) => {
    const inputNumber = inputNum.value;
    if(inputNumber < 1){
        inputNum.style.opacity = "30%";
        inputNum.previousElementSibling.style.opacity = "30%";
    }else{
        inputNum.style.opacity = "100%";
        inputNum.previousElementSibling.style.opacity = "100%";
    }
}

numInputWraps.forEach((numInputWrap) => {
    const downBtn = numInputWrap.children[0];
    const inputNum = numInputWrap.children[1];
    const upBtn = numInputWrap.children[2];

    inputNumZero(inputNum);

    downBtn.addEventListener('click', () => {
        if(inputNum.value >= 1){
            inputNum.value = Number(inputNum.value) - 1;
        }else{

        }
        inputNumZero(inputNum);
    })

    upBtn.addEventListener('click', () => {
        inputNum.value = Number(inputNum.value) + 1;
        inputNumZero(inputNum);
    })

    numInputWrap.addEventListener('change', () => {
        inputNumZero(inputNum);
    })
})

// 오브젝트 영역접기 

const objectThemes = document.querySelectorAll('.object_theme');
objectThemes.forEach((objectTheme) => {
    objectTheme.children[1].addEventListener('click', () => {
        objectTheme.nextElementSibling.classList.toggle('hide');
    })
})

// ingredient_wrapper 영역설정
const ingredientWrapper = document.querySelector('.ingredient_wrapper');
const ingredientNext = document.querySelector('.ingredient_next');

c


