function genColorFn() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let hexColor = `#${randomColor}`;

    let bigint = parseInt(hexColor.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}


const myDiv = document.getElementById("myDiv")

const welcome = document.createElement("h1")
welcome.textContent = "Welcome to DOM homework"

const paragraph = document.createElement("p")
paragraph.textContent = "This is your first DOM homework assignment"

const ul = document.createElement("ul")
let lis = [
    "Jiraiya the Gallant",
    "Yellow Flash of the Leaf",
    "L Lawliet"
]
for (li of lis) {
    let element = document.createElement("li")
    element.textContent = li
    ul.appendChild(element)
}

welcome.classList.add("highlight")

const button = document.createElement("button")
button.textContent = "Add new list item."

let counter = 0
button.addEventListener("click", () => {
    counter = counter + 1
    
    let color = genColorFn()
    let element = document.createElement("li")

    element.style.color = color
    element.textContent = "New List Item " + counter

    ul.appendChild(element)
})

myDiv.addEventListener("click", () => {
    let color = genColorFn()
    myDiv.style.backgroundColor = color
})

myDiv.appendChild(button)
myDiv.appendChild(welcome)
myDiv.appendChild(paragraph)
myDiv.appendChild(ul)