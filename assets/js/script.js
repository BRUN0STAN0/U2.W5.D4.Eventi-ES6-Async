// * DROPDOWN MENU
let dropDownMenu = document.getElementsByClassName("drop-down-menu")[0];

function openMenu() {
    dropDownMenu.classList.toggle("display");
}












// * LOREM IPSUM - PULSANTIERA
let select = document.getElementById("select");
let lorem = document.getElementsByClassName("lorem")[0];

function toggle(enne) {
    lorem.classList.toggle(enne);
}

function colora() {
    let color = document.getElementById('color');
    lorem.style.color = color.value;
}
function fontSize() {
    lorem.style.fontSize = `${select.value}px`
}











//* MINI-LISTA DEGLI IMPEGNI
let listaImpegni = document.getElementsByClassName("lista-impegni")[0];
let valueTask = document.getElementsByClassName("add-task")[0];
let task = document.getElementsByClassName("task");
let x = document.getElementsByClassName("x")[0];
let c = document.getElementsByClassName("c")[0];


function addTask(e) {
    if (e.keyCode == 13) {
        listaImpegni.innerHTML += `
        <div onclick="deleteTask(this)" class="task">${valueTask.value}
        <span class="x">X</span></div>        
        `;
        valueTask.value = "";
    }
}

function clearTask() {
    listaImpegni.remove();
}

function deleteTask(e) {
    e.remove();
}