

////////////////////////////////TOGGLE BARS////////////////////////////////

function toggleIngredients() {
    var ingredientsSection = document.querySelector('.ingredients_div');
    var toggleButton = document.querySelector('.toggle-ingredients');
    var arrow = toggleButton.querySelector('.arrow');

    if (ingredientsSection.classList.contains('hidden')) {
        ingredientsSection.classList.remove('hidden');
        ingredientsSection.classList.add('visible');
        arrow.classList.remove('right');
        arrow.classList.add('down');
    } else {
        ingredientsSection.classList.remove('visible');
        ingredientsSection.classList.add('hidden');
        arrow.classList.remove('down');
        arrow.classList.add('right');
    }
}

function toggleSteps() {
    var stepsSection = document.querySelector('.steps_div');
    var toggleButton = document.querySelector('.toggle-steps');
    var arrow = toggleButton.querySelector('.arrow');

    if (stepsSection.classList.contains('hidden')) {
        stepsSection.classList.remove('hidden');
        stepsSection.classList.add('visible');
        arrow.classList.remove('right');
        arrow.classList.add('down');
    } else {
        stepsSection.classList.remove('visible');
        stepsSection.classList.add('hidden');
        arrow.classList.remove('down');
        arrow.classList.add('right');
    }
}

function toggleWGW() {
    var wgwSection = document.querySelector('.wgw_div');
    var toggleButton = document.querySelector('.toggle-wgw');
    var arrow = toggleButton.querySelector('.arrow');

    if (wgwSection.classList.contains('hidden')) {
        wgwSection.classList.remove('hidden');
        wgwSection.classList.add('visible');
        arrow.classList.remove('right');
        arrow.classList.add('down');
    } else {
        wgwSection.classList.remove('visible');
        wgwSection.classList.add('hidden');
        arrow.classList.remove('down');
        arrow.classList.add('right');
    }
}

/////////////////////////////////RECIPES SEARCH/////////////////////////////////

function searchRecipes() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

/////////////////////////////////RANDOM SUGGESTED RECIPES/////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            href: "mashed_potatoes.html",
            src: "../../img/recipes/mashed_potatoes.jpg",
            alt: "Classic Mashed Potatoes",
            title: "Classic Mashed Potatoes",
            desc: "A perfect side dish for any meal, especially good in the winter for a comforting, warm treat."
        },
        {
            href: "roasted_potatoes.html",
            src: "../../img/recipes/roasted_potatoes.jpg",
            alt: "Roasted Rosemary Potatoes",
            title: "Roasted Rosemary Potatoes",
            desc: "These crisp and fragrant potatoes make a delightful side dish with roasted meats."
        },
        {
            href: "potato_salad.html",
            src: "../../img/recipes/potato_salad.jpg",
            alt: "Potato Salad",
            title: "Potato Salad",
            desc: "An excellent choice for picnics and barbecues, this potato salad is a tasty complement to grilled foods."
        },
        {
            href: "potato_cake.html",
            src: "../../img/recipes/potato_cake.png",
            alt: "Potato Cake",
            title: "Ham Mashed Potato Cake",
            desc: "Crispy and cheesy potato recipe for a delicious snack or appetizer!"
        },
        {
            href: "french_fries.html",
            src: "../../img/recipes/french_fries.jpg",
            alt: "French Fries",
            title: "French Fries",
            desc: "Classic crispy French fries, perfect as a side dish or a snack."
        },
        {
            href: "baked_potato.html",
            src: "../../img/recipes/baked_potato.jpg",
            alt: "Baked Potato",
            title: "Baked Potato",
            desc: "A simple and satisfying baked potato, topped with butter, cheese, and chives."
        },
        {
            href: "potato_gratin.html",
            src: "../../img/recipes/potato_gratin.jpg",
            alt: "Potato Gratin",
            title: "Potato Gratin",
            desc: "A rich and creamy potato gratin, perfect for a special occasion."
        },
        {
            href: "potato_soup.html",
            src: "../../img/recipes/potato_soup.jpg",
            alt: "Potato Soup",
            title: "Potato Soup",
            desc: "A hearty and warming potato soup, great for cold days."
        },
        {
            href: "potato_wedges.html",
            src: "../../img/recipes/potato_wedges.jpg",
            alt: "Potato Wedges",
            title: "Potato Wedges",
            desc: "Seasoned potato wedges, crispy on the outside and fluffy on the inside."
        },
        {
            href: "duchess_potatoes.html",
            src: "../../img/recipes/duchess_potatoes.jpg",
            alt: "Duchess Potatoes",
            title: "Duchess Potatoes",
            desc: "Piped mashed potatoes that are baked until golden and crispy on the outside."
        },
        {
            href: "potato_hash.html",
            src: "../../img/recipes/potato_hash.jpeg",
            alt: "Potato Hash",
            title: "Potato Hash",
            desc: "A savory mix of potatoes, onions, and peppers, perfect for breakfast or brunch."
        },
        {
            href: "potato_frittata.html",
            src: "../../img/recipes/potato_frittata.jpg",
            alt: "Potato Frittata",
            title: "Potato Frittata",
            desc: "A delicious and easy-to-make potato frittata, great for any meal of the day."
        }
    ];

    function getRandomRecipes(num, excludeHref) {
        let filteredRecipes = recipes.filter(recipe => recipe.href !== excludeHref);
        let shuffled = filteredRecipes.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const currentRecipeHref = window.location.pathname.split('/').pop();
    const randomRecipes = getRandomRecipes(3, currentRecipeHref);
    const recipeListContainer = document.getElementById('randomRecipeList');

    randomRecipes.forEach(recipe => {
        const recipeItem = document.createElement('a');
        recipeItem.href = recipe.href;
        recipeItem.className = 'grid-item';
        recipeItem.innerHTML = `
            <article>
                <img src="${recipe.src}" alt="${recipe.alt}" class="center-img">
                <h3>${recipe.title}</h3>
                <p>${recipe.desc}</p>
            </article>
        `;
        recipeListContainer.appendChild(recipeItem);
    });
});


//////////////////////////////////SUBMIT RECIPE////////////////////////////////////

document.getElementById('recipe-request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Affiche le message de confirmation
    document.getElementById('confirmation-message').style.display = 'flex';

    // Cache le formulaire
    document.getElementById('recipe-request-form').style.display = 'none';
});
