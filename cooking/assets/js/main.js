const ing_list = [];
const ing_ul = document.querySelector("#current_ingredient_display")
const ing_submit = document.querySelector("#ing_submit")

const delFromList = function (i) {
    ing_list.splice(ing_list.indexOf(i), 1)
}

ing_submit.addEventListener("submit", function (e) {
    e.preventDefault()
    if (ing_list.includes(ing_submit.ing_input.value) === false && ing_submit.ing_input.value != "") {
        ing_list.push(ing_submit.ing_input.value)
        let li = document.createElement("li")
        li.textContent = ing_submit.ing_input.value
        li.id = ing_submit.ing_input.value
        ing_ul.appendChild(li)
    }
    ing_submit.ing_input.value = ""
})
ing_ul.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        if (confirm(`Out of water ${e.target.innerText}?`)) {
            e.target.remove()
            delFromList(e.target.innerText)
        }
    }
})