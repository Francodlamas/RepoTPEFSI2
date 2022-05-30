let texto = document.getElementById('ingresoTarea');
let button = document.getElementById('btn');
button.onclick = addItem
let checkbox;
let checkbox2 =[];

function addItem() {

  let ul = document.getElementById('tarea'); //ul
  let li = document.createElement('li'); //li
  if (texto.value != "") {
    checkbox= document.createElement('input');
    checkbox.id = "pruebaCheck";
    checkbox.type = "checkbox";
    checkbox.name = "tareas[]";
    checkbox2.push(checkbox);


    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(texto.value));
    ul.appendChild(li);
    
  }


  document.getElementById("ingresoTarea").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
}


}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 1; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
     if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);