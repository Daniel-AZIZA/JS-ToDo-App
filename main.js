const form = document.getElementsByClassName("form")[0];
const ul = document.getElementsByClassName("todos")[0];
const input = document.getElementsByClassName("inputForm")[0];


form.addEventListener("submit",  function(event) {
    event.preventDefault();

    const li = document.createElement('li');
    
    li.className = "todo";
    li.innerHTML = input.value;

    ul.appendChild(li);

    li.addEventListener('click', () => li.className === "todo completed" ? li.className = "todo" :  li.className = "todo completed");
    
    li.oncontextmenu = function (event){
        ul.removeChild(li);
        return (false);
    } 

    input.value = '';
});