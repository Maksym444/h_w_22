//Создаем кнопки для удаления и для пометки как выполнено для уже существующих элементов
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var l = document.createElement ("SPAN");
  var txt2 = document.createTextNode("\u2713");
  l.className = "switch";
  l.appendChild(txt2);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(l);
  myNodelist[i].appendChild(span);
}
    
//Нажимаем на галочку что бы пометить задачу как выполненную 
var $markChecked = document.getElementById('myUL');
$markChecked.addEventListener('click', function(ev) {
  if (ev.target.className === 'switch') {
   ev.target.parentElement.classList.toggle ('checked')
  }
});

//Нажимаем на кнопку закрытия что бы удалить элемент списка 
var $deleteTask = document.getElementById('myUL');
$deleteTask.addEventListener('click', function(ev) {
  if (ev.target.className === 'close') {
   ev.target.parentElement.remove()
  }
});

// Нажимаем на кнопку Выполненные для того что бы скрыть/показать выполненные 
var $showCompleteTask = document.getElementById('cB');
$showCompleteTask.addEventListener ('click', function(ev){
  if (ev.target.className === 'completeBtn') {
    d=document.getElementsByClassName('checked')
    for (e=0; e<d.length; e++){
      if (d[e].className ==='checked'){
        d[e].classList.add("hidden");
      }else{
        d[e].classList.remove("hidden");
      }
    }
  }
});

// Создаем новый елемент списка когда нажимаем на кнопку добавить
function addElement() {
  const $li = document.createElement('li'); 
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  $li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны ввести хоть что то!");
  } else {
    document.getElementById("myUL").appendChild($li);
  }
  document.getElementById("myInput").value = "";
  var l = document.createElement ("SPAN");
  var txt2 = document.createTextNode("\u2713");
  l.className = "switch";
  l.appendChild(txt2);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  $li.appendChild(span);
  $li.appendChild(l)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}