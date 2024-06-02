function toggleIngredients() {
    var ingredientsSection = document.querySelector('.ingredients_div');
    var toggleButton = document.querySelector('.toggle-ingredients');

    if (ingredientsSection.classList.contains('hidden')) {
        ingredientsSection.classList.remove('hidden');
        ingredientsSection.classList.add('visible');
    } else {
        ingredientsSection.classList.remove('visible');
        ingredientsSection.classList.add('hidden');
    }
}

function toggleSteps() {
    var stepsSection = document.querySelector('.steps_div');
    var toggleButton = document.querySelector('.toggle-steps');

    if (stepsSection.classList.contains('hidden')) {
        stepsSection.classList.remove('hidden');
        stepsSection.classList.add('visible');
    } else {
        stepsSection.classList.remove('visible');
        stepsSection.classList.add('hidden');
    }
}
