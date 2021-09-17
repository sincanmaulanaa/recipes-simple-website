const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

const load_more = document.querySelector("#load-more");
const more_recipe = document.querySelector("#more-recipe");

load_more.addEventListener('click', () => {
    if (more_recipe.classList.contains('hidden')) {
        more_recipe.classList.remove('hidden');
    } else {
        more_recipe.classList.add('hidden');
    }
})