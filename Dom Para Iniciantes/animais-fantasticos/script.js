const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

const titulo = Array.from(document.getElementsByClassName("titulo"));

titulo.forEach((item, index, array) => {
  console.log(item, index, array);
});

document.querySelectorAll("li").forEach((item) => {
  console.log(item);
});
