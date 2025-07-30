var d1=document.querySelector(".overley")
var d2=document.querySelector(".container2")
let setb1=document.getElementById("b1")
setb1.addEventListener("click",function(){
    d1.style.display="block"
    d2.style.display="block"

})
var Close=document.querySelector("#close");
Close.addEventListener("click",function(event){
    event.preventDefault();
     d1.style.display="none"
    d2.style.display="none"

})
var TaskContainer=document.querySelector(".TContainer")
var sets=document.getElementById("set")
var taskname=document.getElementById("tname")
var tasktime=document.getElementById("ttime")
sets.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","tasks") 
    div.style.display="block"
    div.innerHTML=`<h1>${taskname.value}</h1>   
                   <h2>${tasktime.value}</h2>
                <button onclick="del(event)">Finish</button>`
    TaskContainer.append(div)
    d1.style.display="none"
    d2.style.display="none"

})
function del(event){
    event.target.parentElement.remove()
}

