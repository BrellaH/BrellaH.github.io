const ingredients = []
ingredients_aside = document.getElementById("current_ingredient_display");

function loadCurrentIngredientList() {
    if (ingredients_aside.childNodes.length != 0) {
        ingredients_aside.removeChild(ingredients_aside.childNodes[0])
    }
    ingredients_ul = document.createElement("ul")
    ingredients_aside.appendChild(ingredients_ul)
    for (i = 0; i < ingredients.length; i++) {
        listItem = document.createElement("li");
        listItem.innerHTML = ingredients[i]
        ingredients_ul.appendChild(listItem)
    }
}

function addIngredient() {
    ing = document.getElementById("ing").value
    ingredients.push(ing)
    loadCurrentIngredientList()
}

function deleteIngredient() {
    ing = document.getElementById("ing").value
    if (ingredients.indexOf(ing) != -1) {
        ingredients.splice(ingredients.indexOf(ing), 1)
    }
    loadCurrentIngredientList()
}