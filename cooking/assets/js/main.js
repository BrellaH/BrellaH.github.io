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
        li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg> ${ing_submit.ing_input.value}`
        li.id = ing_submit.ing_input.value
        ing_ul.appendChild(li)
    }
    ing_submit.ing_input.value = ""
})
ing_ul.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        if (confirm(`Out of ${e.target.id}?`)) {
            delFromList(e.target.id)
            e.target.remove()
        }
    }
    else if (e.target.nodeName === "svg") {
        if (confirm(`Out of ${e.target.parentNode.id}?`)) {
            delFromList(e.target.parentNode.id)
            e.target.parentNode.remove()
        }
    }
})