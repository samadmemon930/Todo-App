var maincontent = document.getElementById("maincontent")
var input = document.getElementById("input")
var addbtn = document.getElementById("addbtn")
var deletebtn = document.getElementById("deletebtn")
var updatebtn = document.getElementById("updatebtn")
var checkBox = document.getElementById("checkBox")


var selectedItem = ""
var checkBoxSelected = false;

addbtn.addEventListener("click",function(){
    if(input.value){
    var li = document.createElement("li")

    var checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.style.margin="10px"

    var b = document.createElement("b")
    b.innerText = input.value
    b.style.display="inline-block"
    b.style.margin= "10px"
    b.style.width="400px"
    b.style.overflow="hidden"

    
  
    var editbtn = document.createElement("button")
    var editicon = document.createElement("i")
    editicon.classList.add("fa-pen")
    editicon.classList.add("fa-solid")
    editbtn.appendChild(editicon)
    editbtn.setAttribute("onclick",'edittext(this)')


    var deletebtn = document.createElement("button")
    var deleteicon = document.createElement("i")
    deleteicon.classList.add("fa-trash-can")
    deleteicon.classList.add("fa-solid")
    deletebtn.appendChild(deleteicon)
    deletebtn.setAttribute("onclick",'deletetext(this)')
  


    li.appendChild(checkBox)
    li.appendChild(b)
    li.appendChild(editbtn)
    li.appendChild(deletebtn)
    maincontent .appendChild(li)
    input.value=""
    }
})

function deletetext(e){
    console.log(e.parentNode)
    e.parentNode.remove()

}

function edittext(e){
    input.value = e.parentNode.childNodes[1].innerText
    addbtn.style.display="none"
    deletebtn.style.display="none"
    updatebtn.style.display="inline"
    input.focus()
    selectedItem = e.parentNode.childNodes[1]
    console.log(selectedItem)
    

    // var inputfield  = document.createElement("input")
    // e.parentNode.childNodes[1].remove()
    // e.parentNode.childNodes[1].appendChild(inputfield)

}

updatebtn.addEventListener("click",function(){
if(input.value){
    selectedItem.innerText  = input.value
    addbtn.style.display="inline"
    deletebtn.style.display="inline"
    updatebtn.style.display="none"
    input.value = ""
}
})

checkBox.addEventListener("click",function(){
    for(var i =0;i<maincontent.children.length;i++){

    }
}
