const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", 
    "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg",
    "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg"
];

const randomImgs = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImgs}`;

document.body.appendChild(bgImage);