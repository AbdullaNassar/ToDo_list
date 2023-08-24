let listContainer=document.getElementById("list-container");
function addTask(){
    let text=document.querySelector("input");
    if(text.value==="")
    {
        alert("Must type task");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=text.value
        listContainer.appendChild(li);
        text.value="";
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
   
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


listContainer.innerHTML=localStorage.getItem("data");