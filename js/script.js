let crashEL = document.getElementById("crash");
let kickEL = document.getElementById("kick");
let snareEL = document.getElementById("snare");
let tomEL = document.getElementById("tom");
let a1EL = document.getElementById("a1");
let a2EL = document.getElementById("a2");
let a3EL = document.getElementById("a3");
let a4EL = document.getElementById("a4");
crashEL.addEventListener("click", () => {
  a1EL.play();
});
kickEL.addEventListener("click", () => {
  a4EL.play();
});
snareEL.addEventListener("click", () => {
  a3EL.play();
});
tomEL.addEventListener("click", () => {
  a2EL.play();
});
