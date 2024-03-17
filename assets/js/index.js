//100vh 브라우저 환경 커버하기
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    ingredientNextHeightSelect();
})

// ingredient_wrapper 영역설정
const ingredientWrapper = document.querySelector('.ingredient_wrapper');
const ingredientNext = document.querySelector('.ingredient_next');

const ingredientNextHeightSelect = () => {
    const ingredientWrapperHeight = ingredientWrapper.offsetHeight;
    ingredientNext.style.height = `${ingredientWrapperHeight}px`
}

ingredientNextHeightSelect();

//재료 표시 영역 ingredient_wrap 내용 없으면 감추기
const ingredientWraps = document.querySelectorAll('.ingredient_wrap');
const ingredientWrapChange = () => {
    ingredientWraps.forEach((ingredientWrap) => {
        const ingredients = Array.from(ingredientWrap.children[1].children);
        ingredients.forEach((ingredient) => {
            if(ingredient.classList.contains('on')){
                ingredient.parentElement.parentElement.classList.add('on');
            }else{
                ingredient.parentElement.parentElement.classList.remove('on');
            }
        })
    })

    ingredientNextHeightSelect();
}

const values = document.querySelectorAll('.value');

// 재료 표시

const drawValue = () => {


    ingredientWrapChange();
};

//재료 1차 표시 
const valueChange = (item, amount, num) => {
    values.forEach((valueHtml) => {
        if(valueHtml.classList.contains(item)){
            if(amount == 0){
                valueHtml.parentElement.parentElement.classList.remove('on');
            }else{
                if(valueHtml.innerHTML == ''){
                    valueHtml.parentElement.parentElement.classList.add('on');
                    valueHtml.innerHTML = amount;
                }else{
                
                }
            }
        }
    })
}


// 물품 수량 변경
const quantityChange = (input) => {
    const item = input.classList[1];
    const amountHtml = input.classList[2];
    const amount = Number(amountHtml.slice(0, -1));
    const quantity = input.value;
    const totalQuantity = amount * quantity;

    if(item == 'white_candle'){
        const pillawaxAmount = totalQuantity * 0.9;
        valueChange('pillawax', pillawaxAmount, amount)
        const bambooAmount = totalQuantity * 0.065;
        const mugwortAmount = totalQuantity * 0.035;
    }else if(item == 'green_candle'){
        const pillawaxAmount = totalQuantity * 0.9;
        const gardenpartyAmount = totalQuantity * 0.075;
        const mugwortAmount = totalQuantity * 0.025;
        const huntergreenAmount = pillawaxAmount * 0.00051;
        const magentaAmount = pillawaxAmount * 0.000114;
        const canaryyellowAmount = pillawaxAmount * 0.00017;
    }else if(item == 'red_candle'){

    }else if(item == 'black_candle'){

    }else if(item == 'white_mika'){

    }else if(item == 'black_mika'){

    }
}

// 물품 수량 제어
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

    quantityChange(inputNum);
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