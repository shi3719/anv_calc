const values = document.querySelectorAll('.value');
// amount storage data
const result = {}

// 재료 표시
const drawValue = () => {
    ingredientWrapChange();
};

drawValue();

// merge

const getOrganizedData = () => {
    const ingredientArr = result ? Object.keys(result).reduce((prev, key) => {
        const currentIngredient = data[key]
        if (!currentIngredient) return prev;
        const calcIngredient = currentIngredient.map((el) => ({
            ...el,
            amount: el.amount * result[key]
        }))

        calcIngredient.forEach((el) => {
            const checkExist = prev.find((prevEl) => prevEl.name === el.name)
            if (checkExist) {
                prev = prev.map((prevEl) => prevEl.name === el.name ? ({
                    ...el,
                    amount: el.amount + prevEl.amount
                }) : prevEl)
            } else {
                prev = [...prev, el]
            }
        })

        return prev;
    }, []) : []


    return ingredientArr

}


// 물품 수량 변경
const quantityChange = (input) => {
    const item = input.classList[1];
    const quantity = input.value;
    result[item] = Number(quantity);

    const organizedData = getOrganizedData();
    // console.log(organizedData)
    organizedData.forEach(el => valueChange(el))
}

//재료 1차 표시 
const valueChange = ({name, amount}) => {
    // console.table({name, amount})
    values.forEach((valueHtml) => {
        if (valueHtml.classList.contains(name)) {
            if (amount == 0) {
                valueHtml.parentElement.parentElement.classList.remove('on');
            } else {
                valueHtml.parentElement.parentElement.classList.add('on');
                valueHtml.innerHTML = Math.ceil(amount * 100) / 100;
            }
            drawValue();
        }
    })
}


// 물품 수량 제어
const numInputWraps = document.querySelectorAll('.num_input_wrap');
const inputNumZero = (inputNum) => {
    const inputNumber = inputNum.value;
    if (inputNumber < 1) {
        inputNum.style.opacity = "30%";
        inputNum.previousElementSibling.style.opacity = "30%";
    } else {
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
        if (inputNum.value >= 1) {
            inputNum.value = Number(inputNum.value) - 1;
        } else {

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