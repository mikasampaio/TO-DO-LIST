const btn = document.querySelector('.btn-Add');
const textarea = document.querySelector('textarea')
const addingTask = document.querySelector('.list-task')
const error = document.getElementById('error-message')

/* textarea.addEventListener("keyup", alt => {

    textarea.style.height = "40px"
    let textHeight = alt.scrollHeight
    textarea.style.height = `${textHeight}px`

}) */

let list = []

const valueInput = () => {

    const valueInput = textarea.value.trim()
    if (valueInput.length === 0) {
        error.classList.remove("hidden")
        error.style.cssText = "color: red;" +
            "font-size: 15px;" +
            "font-weight: 700;" +
            "margin-left: 5px;"
    } else {
        error.classList.add("hidden")

        list.push(textarea.value)

        textarea.value = ''

        showTask()
    }
}

const showTask = () => {

    let newList = ''

    list.forEach((task, index) => {

        newList = newList + `
      <li>
        <p>
          ${task}
        </p>
        <div class="item">
        <i class="fa-regular fa-circle-check" onclick="finish(${index})"></i>
        <i class="fa-solid fa-circle-minus" onclick="deleteTask(${index})"></i>
        </div>

      </li>
  `
    })

    addingTask.innerHTML = newList
}

function finish(index) {
}

function deleteTask(index) {
    list.splice(index, 1)

    showTask()
}

btn.addEventListener("click", valueInput)