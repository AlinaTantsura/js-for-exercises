// Task 1

// const listItems = document.querySelectorAll(".item");
// console.log("Number of categories:", listItems.length);

// listItems.forEach(item => {
//     const category = item.querySelector("h2");
//     const categoryItems = item.querySelectorAll("li");
//     console.log("Category:", category.textContent);
//     console.log("Elements: ", categoryItems.length);
// })

// Task 2

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// const gallery = document.querySelector(".gallery")

// // // const markup = images.map(image => `<li><img src='${image.url}' alt='${image.alt}' /></li>`).join()
// // // gallery.insertAdjacentHTML("beforeend", markup)

// const items = images.map(image => {
//     const liItem = document.createElement("li");
//     const imgItem = document.createElement('img');
//     imgItem.alt = image.alt;
//     imgItem.src = image.url;
//     liItem.append(imgItem);
//     return liItem;
// });

// gallery.append(...items);

// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";

// Task 3

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// const handleInput = (event) => {
//     if (event.target.value.trim() !== "") {
//         output.textContent = event.target.value
//     }
//     else output.textContent = "Anonymous"
// }

// input.addEventListener("input", handleInput);

// Task 4

// const form = document.querySelector(".login-form");

// const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = e.currentTarget;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     if (email === "" || password === "") {
//         alert('All form fields must be filled in');
//     }
//     else {
//         console.log({
//             email: email.trim(),
//             password: password.trim()
//         })
//         form.reset();
//     }
// }

// form.addEventListener("submit", handleSubmit)

// Task 5

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const btn = document.querySelector(".change-color");
// const widget = document.querySelector("body");
// const colorName = document.querySelector(".color");

// const handleChangeColor = () => {
//     const color = getRandomHexColor();
//     widget.style.backgroundColor = color;
//     colorName.textContent = color;
// }

// btn.addEventListener("click", handleChangeColor);

// Task 6

// const boxes = document.querySelector("#boxes");
// const controls = document.querySelector("#controls");
// const input = controls.querySelector("input");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");

// let amount;

// input.addEventListener("input", (e) => amount = e.target.value)

// const handleCreate = () => {
//     console.log("Create")
//     if (amount >= 1 && amount <= 100) {
//         createBoxes(amount)
//     }
// }

// btnCreate.addEventListener("click", handleCreate);

// const handleDestroy = () => {
//     boxes.innerHTML = "";
// }

// btnDestroy.addEventListener("click", handleDestroy);

// function createBoxes(amount) {
//     const markup = [];
//     for (let i = 0; i <= amount - 1; i++){
//         let size = 30;
//         const color = getRandomHexColor();
//         const box = `<div style="background-color: ${color}; width: ${size + i * 10}px; height: ${size + i * 10}px"></div>`;
//         markup.push(box)
//     }

//     boxes.innerHTML = markup.join("");
// }