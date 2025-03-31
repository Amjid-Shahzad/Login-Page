const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const conainer = document.getElementById("container");
registerBtn.addEventListener("click", function() {
    conainer.classList.add("active");
    conainer.classList.remove("active-login");
});
loginBtn.addEventListener("click", function() {
    conainer.classList.remove("active");
    conainer.classList.add("active-login");

});