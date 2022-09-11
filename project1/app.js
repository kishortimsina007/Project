

function addBox(){
    var temp = document.getElementById('temp').content;
    var copy = document.importNode(temp,true);
    document.getElementById('parent').appendChild(copy);
}
document.getElementById("AddEmployee").addEventListener("click",addBox);

function removeBox(e){
     if(e.target.classList.contains("Remove")){
         e.target.parentElement.parentElement.remove();
     }
    
}
document.getElementById('parent').addEventListener('click',removeBox);

