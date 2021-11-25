// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

// const titulo = Array.from(document.getElementsByClassName("titulo"));

// titulo.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// document.querySelectorAll("li").forEach((item) => {
//   console.log(item);
// });

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
