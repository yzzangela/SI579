
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("icecreamslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

let addItem = () => {
  let lunch_list = document.getElementById('icecream-list');
  let islactosefree = document.getElementById('is-lactose-free').checked;
  let new_icecream = document.createElement('li');
  let icecream_name = document.getElementById('icecream-name').value;
  new_icecream.className = islactosefree? "lactose-free":"";
  new_icecream.textContent = icecream_name;
  lunch_list.appendChild(new_icecream);
}

let hide_lactose_free= () => {
  let diary_items = document.getElementsByClassName('lactose-free');
  for(item of diary_items) {
      item.style.display = "none";
  }
}

let display_all = () => {
  let diary_items = document.getElementsByClassName('lactose-free');
  for(item of diary_items) {
      item.style.display = "block";
  }
}

let add_btn = document.getElementById('addbtn');
add_btn.addEventListener('click', addItem);

let hide_dairy = document.getElementById('hide-diary');
hide_dairy.addEventListener('click', hide_lactose_free);

let all_btn = document.getElementById('allbtn');
all_btn.addEventListener('click', display_all);
