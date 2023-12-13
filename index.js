const formElements = document.getElementById("form_elements");
const inputBox = document.getElementById("input_box");
const btns = document.getElementById("btn");
const list_containers = document.getElementById("list_container");


function addtoDo() {
    if (inputBox.value == "") {
        alert("Please enter some value")
    }else{
    let createLi = document.createElement("li");
    createLi.innerHTML = `
     <i class="fa-regular fa-circle-check unchecked"></i>
            <i class="fa-sharp fa-solid fa-circle-check checked"></i>
            <span> ${inputBox.value} </span>  
            <span id="delete"> 
                <i class="fa-solid fa-xmark"></i>
            </span>
    `;
    inputBox.value = "";
    list_containers.append(createLi);
    createLi.addEventListener('click', 
    function() {
        this.classList.toggle("active");
        }
    )
    createLi.querySelector("#delete").addEventListener('click', function(e) {
        createLi.remove();
    })
    saveData();
}

}


function saveData() {
    localStorage.setItem('data',list_containers.innerHTML);
}
function showData() {
    list_containers.innerHTML = localStorage.getItem('data');
    let items = list_containers.querySelectorAll('li');
    items.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle("active");
            saveData();
        });

        let deleteButton = item.querySelector("#delete");
        deleteButton.addEventListener('click', function(e) {
            item.remove();
            saveData();
            e.stopPropagation(); // Prevents event bubbling to the parent li
        });
    });
}


showData();