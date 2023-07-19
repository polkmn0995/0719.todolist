const btn = document.getElementById("btn");
let addValue = document.getElementById("addValue");
let result = document.getElementById("result");

//할일 추가하기
function addTodo() {
  if (addValue.value === false) {
    alert("내용을 입력하세요!!");
  } else {
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerHTML = addValue.value;
    result.appendChild(list);
    list.appendChild(del);
    del.innerText = "X";
    del.style.fontSize = "20px";
    del.style.border = "0";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.cursor = "pointer";
    del.style.padding = "3px";
    del.addEventListener("click", deleteList);
    del.style.position = "relative";
    addValue.value = "";
    list.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
      list.style.color = "black";
      list.style.opacity = "0.5";
    });
  }
}

// 할 일 목록 삭제하기
function deleteList(e) {
  let removeOne = e.target.parentElement;
  removeOne.remove();
}

// 엔터 키 감지 이벤트
addValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo(); // 엔터 키가 눌리면 addTodo() 함수를 호출하여 할 일 목록 추가
  }
});

// 모두 삭제하기
function allClearlist(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    if (result.innerHTML == "") {
      alert("삭제 할 목록이 없습니다.");
    } else {
      result.innerText = ""; // 전체 삭제
    }
  } else {
    return false;
  }
}
