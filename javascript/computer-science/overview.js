function init() {
  document.querySelector(".login-box").addEventListener("click", (element) => {
    document.querySelector(".login-container").classList.add("hide");
  });

  document
    .querySelector("li.expandable")
    .addEventListener("click", (element) => {
      let menuItem = document.querySelector(".expandable ul");

      if (menuItem.classList.contains("hidden")) {
        console.log("remove");
        menuItem.classList.remove("hidden");
      } else {
        console.log("add");
        menuItem.classList.add("hidden");
      }
    });
}

init();
