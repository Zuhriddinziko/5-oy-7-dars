import { validete, getDate, creteItem } from "./function.js";
// let form = document.querySelector('#form');
let fild = document.querySelector("#fild");
let time = document.querySelector("#tame");
let button = document.querySelector("#btn");
let filter = document.querySelector("#filter");
let wrapper = document.querySelector("#wrapper");
// let form = document.querySelector('#form');
// console.log(time)

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const isvali = validete(fild, time);
    if (!isvali) {
      return;
    }

    let todo = {
      name: fild.value,
      time: time.value,
      status: "active",
      id: Date.now(),
    };
    let todos = getDate();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    fild.value = "";
    time.value = "";
    let item = creteItem(todo);
    wrapper.innerHTML += item;
  });

document.addEventListener("DOMContentLoaded", function () {
  let todos = getDate();
  todos.forEach((element) => {
    let item = creteItem(element);
    wrapper.innerHTML += item;
  });
  const deleletButtons = document.querySelector("#deletey");
  // deleletButtons.forEach(function(el){
  //     console.log(el);
  // })
  // console.log(todos);
});
document.addEventListener("DOMContentLoaded", function () {
  let todos = getDate();
  todos.length &&
    todos.forEach((element) => {
      let card = creteItem(element);
      wrapper.innerHTML += card;
    });
  const deleletButtons = document.querySelectorAll("#deletey");
  deleletButtons.forEach(function (el) {
    el.addEventListener("click", function () {
      let dele = confirm("rostdan o`chirmoqchimisiz");
      // console.log(this.parentNode.parentNode);
      if (dele) {
        this.parentNode.parentNode.remove();
        let id = this.getAttribute("data-id");
        // console.log(id);
        todos = todos.filter(function (el) {
          return id != el.id;
        });
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    });
  });
  let chik = document.querySelectorAll("#input");
  let info = document.querySelectorAll("#info");
  console.log(info);
  chik.forEach(function (el) {
    let idText = el.id;

    // let chikked = this.value;
    console.log(idText);
    el.addEventListener("click", function (event) {
      event.preventDefault;

      let todo = getDate();
      // console.log(todo.parentNode);

      let bajardim = alert("siz bajarib bo`ldingizmi");
      if (bajardim) {
        this.parentNode.nextSibling.remove();
        //  console.log(ak);
      }
    });
  });
  // chik&&chik.forEach(function(el){
  //     // console.log(el);
  //     el.addEventListener('ch')
  // })
  // console.log(chik);
  // console.log(deleletButtons);
});
filter &&
  filter.addEventListener("change", function () {
    // console.log(this.value);
    let todos = getDate();
    let selecktValue = this.value;
    let rezult = todos.filter(function (element) {
      // let selecktValue= this.value;
      if (selecktValue == "all") {
        return true;
      }
      if (selecktValue == "active") {
        return element.status == "active";
      }
      if (selecktValue == "inactive") {
        return element.status == "inactive";
      }
    });
    // console.log(selecktValue);

    wrapper.innerHTML = "";
    rezult.length &&
      rezult.forEach(function (el) {
        let card = creteItem(el);
        wrapper.innerHTML += card;
      });
    // console.log(card);
  });
