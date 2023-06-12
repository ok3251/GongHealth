document.addEventListener("DOMContentLoaded", function() {
  const mearea = document.getElementById("memo");
  const saveButton = document.getElementById("saveBtn");
  const memoContainer = document.getElementById("memoContainer");

  saveButton.addEventListener("click", function() {
    const memoText = mearea.value;
    if (memoText.trim() === "") {
      alert("메모 내용을 입력하세요.");
      return;
    }

    const memo = {
      id: new Date().getTime(),
      text: memoText
    };

    let memos = JSON.parse(localStorage.getItem("memos")) || [];
    memos.push(memo);
    localStorage.setItem("memos", JSON.stringify(memos));

    mearea.value = "";
    alert("메모가 저장되었습니다.");

    runMemos();
  });

  function runMemos() {
    memoContainer.innerHTML = "";

    const memos = JSON.parse(localStorage.getItem("memos")) || [];
    for (let i = 0; i < memos.length; i++) {
      const memo = memos[i];

      const memoDiv = document.createElement("div");
      memoDiv.textContent = memo.text;
      memoDiv.classList.add("memo-box");

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";
      deleteButton.addEventListener("click", function() {
        deleteMemo(memo.id);
      });

      memoDiv.appendChild(deleteButton);
      memoContainer.appendChild(memoDiv);
    }
  }

  function deleteMemo(id) {
    let memos = JSON.parse(localStorage.getItem("memos")) || [];
    memos = memos.filter(function(memo) {
      return memo.id !== id;
    });
    localStorage.setItem("memos", JSON.stringify(memos));

    runMemos();
  }

  runMemos();
});

document.getElementById("back").onclick = function() {
  location.href = "Main.html";
};
document.getElementById("gongji").onclick = function() {
  location.href = "gesi.html";
};
document.getElementById("kcalge").onclick = function() {
  location.href = "calculator.html";
};
document.getElementById("memob").onclick = function() {
  location.href = "memo.html";
};
document.getElementById("gesip").onclick = function() {
  location.href = "community.html";
};