function validete(fild, time) {
    if (fild.value.length < 5) {
        alert('6 ta belgidan kam bo`lmasin');
        fild.focus();

        return false;
    }
    if (!time.value) {
        alert('time tanlangan bo`lishi shart');
        time.focus();
        return false;
    }

    return true;
}
function getDate() {
    let dete = [];
    if (localStorage.getItem('todos')) {
        dete = JSON.parse(localStorage.getItem('todos'))
    }
    return dete;
}

function creteItem(todo) {
  let isChecked= todo.status=="active" ? false : true;
    return `  <div class="dete">
    <div id="todo_time">
          <div id="chekid">
            <input id=input type="checkbox" ${isChecked? 'checked':""}>
          </div>
          <div id="info">
            <b style = "text-decoration: ${isChecked? 'line-through': 'none'}"> ${todo.name}</b><br>
            <b> ${todo.time}</b>
          </div>
    </div>
   <div id="delete">
   <div id="deletey" data-id="${todo.id}">
   <i class="fa-solid fa-trash"></i>
   </div>
   <div id="edit">
   <i class="fa-solid fa-pen"></i>
</div></div>
  </div>`;
}
export { validete, getDate, creteItem }