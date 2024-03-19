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
        console.log(ingredients);
        const hasOnClass = ingredients.some((ingredient) => ingredient.classList.contains('on'));
        if (hasOnClass) {
            ingredientWrap.classList.add('on');
        } else {
            ingredientWrap.classList.remove('on');
        }
    })
    ingredientNextHeightSelect();
}

// 오브젝트 영역접기 

const objectThemes = document.querySelectorAll('.object_theme');
objectThemes.forEach((objectTheme) => {
    objectTheme.children[1].addEventListener('click', () => {
        objectTheme.nextElementSibling.classList.toggle('hide');
    })
})