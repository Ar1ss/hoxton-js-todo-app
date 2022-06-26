// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state


let state = {
  todos: [
    {title : "Go shoping" , completed: false},
    {title : "Work out"  , completed: true},
    {title : "Eat diner" , completed: true},
    {title : "Do something" , completed : true}
  ],
  showCompleted:false
}

function incompleteTodo(){
  return state.todos.filter(todo => todo.completed === false)
}

function createTodo(title){
  let match = state.todos.some(todo => todo.title === title)
  if (match) return
  state.todos.push({title : title , completed : false})
}

function completedTodos(){
  return state.todos.filter(todo => todo.completed === true)
}

function deleteTodo(title){
  let updatedTodos = state.todos.filter(todo => todo.title !== title)
  state.todos = updatedTodos
}

function toggleTodo(title){
  let match = state.todos.find(todo => todo.text === title)
  if (!match) return
}

function toggleCompletedTodo(){
  state.showCompleted = !state.showCompleted
}

function getIncompleteTodos(){
  return state.todos.filter(todo => todo.completed === false)
}



function getTodosToTheDisplay(){
  if(state.showCompleted)return getIncompleteTodos
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
  if(state.showCompleted) optionsCheckBox.checked = true
  optionsCheckBox.addEventListener('click', function(){
    toggleCompletedTodo()
    render()
  })
  
  

  let optionsCheckBoxName = document.createElement("label")
  optionsCheckBoxName.setAttribute("for", "show-completed")
  optionsCheckBoxName.textContent = "Show completed"

  //Add item

  let addItemTitle = document.createElement('h1')
  addItemTitle.textContent = 'ADD ITEM'

  let addItemInput = document.createElement('input')
  addItemInput.className = 'add-item__input'
  addItemInput.setAttribute('type' , 'text')
  addItemInput.setAttribute('placeholder' , 'Add here...')

  let additemForm = document.createElement("form")
  additemForm.className = "add-item__form"

    additemForm.addEventListener("submit" , function(event){
    event.preventDefault()
    createTodo(addItemInput.value)
    render()
  }) 

  let addItemSection = document.createElement("section")
  addItemSection.className = "additem__section"

  let addItemButton = document.createElement("button")
  addItemButton.className = "additem__button"
  addItemButton.textContent = "Add"

  //Todo

  let todoList = document.createElement("ul")

  let tododeleteBtn = document.createElement("button")
  tododeleteBtn.textContent= "Delete"



  for(let todo of state.todos){
    let todoItemLi = document.createElement("li")
    todoItemLi.className = "todo"


    let tododeleteBtn = document.createElement("button")
    tododeleteBtn.textContent= "Delete"
    tododeleteBtn.addEventListener('click', function(){
      deleteTodo(todo.title)
      render()
    })


    let tdodoItemChBox = document.createElement("input")
    tdodoItemChBox.setAttribute('type',"checkbox")
    


    todoItemLi.textContent = todo.title
    todoList.append(todoItemLi)
    todoItemLi.append( tdodoItemChBox,tododeleteBtn)
    
  }

  let todoSection = document.createElement("section")
  todoSection.className = "todo__section"

  let todoTitle = document.createElement('h1')
  todoTitle.textContent = 'TODO'

  let todoCheckBox = document.createElement('input')
  todoCheckBox.id = "todo-checkbox"
  todoCheckBox.setAttribute("type" , "checkbox")



  //Append

  additemForm.append(addItemInput,addItemButton)
  optinionsSection.append(optionsCheckBox,optionsCheckBoxName)
  addItemSection.append(additemForm)
  todoSection.append(todoList,)
  

  

  
  document.body.append(mainForm)
  mainForm.append(
    optnionsTitleh1,
    optinionsSection,
    addItemTitle,
    addItemSection,
    todoTitle,
    todoSection,

    )
  
  
}
render();
