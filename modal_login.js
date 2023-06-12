function openLoginModal() {
  const modalpage_login = document.getElementById("modalpage_login");
  modalpage_login.style.display = "flex";
}

function closeLoginModal() {
  const modalpage_login = document.getElementById("modalpage_login");
  modalpage_login.classList.add("fade-out");
  setTimeout(() => {
    modalpage_login.style.display = "none";
    modalpage_login.classList.remove("fade-out");
  }, 300);
}

function submitLoginForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

}