// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

function render() {
  document.body.textContent = ""

  let mainForm = document.createElement("form")
  mainForm.className = 'main-form'

  let optnionsTitleh1 = document.createElement("h1")
  optnionsTitleh1.textContent = "OPTININOS"

  let optionsCheckBox = document.createElement("input")
  optionsCheckBox.id = "show-completed"
  optionsCheckBox.setAttribute("type", "checkbox")
  

  let optionsCheckBoxName = document.createElement("label")
  optionsCheckBoxName.setAttribute("for", "show-completed")
  optionsCheckBoxName.textContent = "Show completed"
  
  let addItemTitle = document.createElement('h1')
  addItemTitle.textContent = 'ADD ITEM'

  let addItemInput = document.createElement('input')
  addItemInput.className = 'add-item__input'
  addItemInput.setAttribute('type' , 'text')
  addItemInput.setAttribute('placeholder' , 'Add')
  
  let todoTitle = document.createElement('h1')
  todoTitle.textContent = 'TODO'

  let todoCheckBox = document.createElement('input')
  todoCheckBox.id = "todo-checkbox"
  todoCheckBox.setAttribute("type" , "checkbox")

  let todoCheckBoxName = document.createElement('label')
  todoCheckBoxName.setAttribute('for' , 'todo-checkbox')
  todoCheckBoxName.textContent = 'I have to do'

  let completedTitle = document.createElement('h1')
  completedTitle.textContent = 'COMPLETED'

  document.body.append(mainForm)
  mainForm.append(
    optnionsTitleh1,
    optionsCheckBox,
    optionsCheckBoxName,
    addItemTitle,
    addItemInput,
    todoTitle,
    todoCheckBox,
    todoCheckBoxName,
    completedTitle)
  
  
}
render();
