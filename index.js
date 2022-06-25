// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state


let state = {
  todos: [
    {title : "Go shoping" , completed: false},
    {title : "Work out"  , completed: false},
    {title : "Eat diner" , completed: false}, 
  ],
  showCompleted:false
}

function incompleteTodo(){
  return state.todos.filter(todo => todo.completed === false)
}

function creaeTodo(text){
  let foundMatch = state.todos.some(todo => todo.text === text)
  if (foundMatch) return
}

function completedTodos(){
  return state.todos.filter(todo => todo.completed === true)
}

function deleteTodo(text){
  let updatedTodos = state.todos.filter(todo => todo.text !== text)
  state.todos = updatedTodos
}

function toggleTodo(text){
  let match = state.todos.find(todo => todo.text === text)
  if (!match) return
}

function toggleCompletedTodo(){
  state.showCompleted = !state.showCompleted
}


function render() {
  document.body.textContent = ""

  let mainForm = document.createElement("form")
  mainForm.className = 'main-form'
  
  //Optinions

  let optnionsTitleh1 = document.createElement("h1")
  optnionsTitleh1.textContent = "OPTININOS"

  let optinionsSection = document.createElement("section")
  optinionsSection.className = "optinions__section"

  let optionsCheckBox = document.createElement("input")
  optionsCheckBox.id = "show-completed"
  optionsCheckBox.setAttribute("type", "checkbox")
  

  let optionsCheckBoxName = document.createElement("label")
  optionsCheckBoxName.setAttribute("for", "show-completed")
  optionsCheckBoxName.textContent = "Show completed"

  //Add item

  let addItemTitle = document.createElement('h1')
  addItemTitle.textContent = 'ADD ITEM'

  let addItemSection = document.createElement("section")
  addItemSection.className = "additem__section"

  let addItemInput = document.createElement('input')
  addItemInput.className = 'add-item__input'
  addItemInput.setAttribute('type' , 'text')
  addItemInput.setAttribute('placeholder' , 'Add here...')

  let addItemButton = document.createElement("button")
  addItemButton.className = "additem__button"
  addItemButton.textContent = "Add"
  
  //Todo

  let todoSection = document.createElement("section")
  todoSection.className = "todo__section"

  let todoTitle = document.createElement('h1')
  todoTitle.textContent = 'TODO'

  let todoCheckBox = document.createElement('input')
  todoCheckBox.id = "todo-checkbox"
  todoCheckBox.setAttribute("type" , "checkbox")


  //Completed

  let completedTitle = document.createElement('h1')
  completedTitle.textContent = 'COMPLETED'

  optinionsSection.append(optionsCheckBox,optionsCheckBoxName)
  addItemSection.append(addItemInput,addItemButton)
  todoSection.append(todoCheckBox,)

  document.body.append(mainForm)
  mainForm.append(
    optnionsTitleh1,
    optinionsSection,
    addItemTitle,
    addItemSection,
    todoTitle,
    todoSection,
    completedTitle,
    )
  
  
}
render();
