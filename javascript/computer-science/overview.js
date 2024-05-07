function init() {
  document.querySelector(".login-box").addEventListener("click", (element) => {
    document.querySelector(".login-container").classList.add("hide");
  });

  document
    .querySelector("li.expandable")
    .addEventListener("click", (element) => {
      let menuItem = document.querySelector(".expandable ul");
      let menuParent = document.querySelector(".expandable");

      if (menuItem.classList.contains("hidden")) {
        console.log("remove");
        menuItem.classList.remove("hidden");
        menuParent.classList.add("expanded");
      } else {
        console.log("add");
        menuItem.classList.add("hidden");
        menuItem.classList.remove("expanded");
      }
    });
}

init();
