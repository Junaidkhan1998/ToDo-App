var items = document.getElementById("todo_items")

function addItem(){
    var todo = document.getElementById("todo")
    var list  = document.createElement("li")
    list.setAttribute("id","list")
    var listText = document.createTextNode(todo.value)
    list.appendChild(listText)
    items.appendChild(list)
    todo.value = ""


    //create delete btn 
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete Item")
    delBtn.appendChild(delText)
    list.appendChild(delBtn)
    delBtn.setAttribute("id","delbtn")
    delBtn.setAttribute("onclick","deleteItem(this)")


    //create edit btn
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit Item")
    editBtn.appendChild(editText)
    list.appendChild(editBtn)
    editBtn.setAttribute("id","editbtn")
    editBtn.setAttribute("onclick","editItem(this)")

}

function deleteAll(){
    list.items.clear()
}

function deleteItem(d){
    d.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Text",val)
    e.parentNode.firstChild.nodeValue = editValue
}

