const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const navImg = document.querySelector('ul.gallery')
// const imageEl = document.createElement('img');
// const listEl = document.createElement('li');
// imageEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl.alt = 'White and Black Long Fur Cat';
// imageEl.width = 200;
// listEl.appendChild(imageEl);
// navImg.appendChild(listEl);
// console.log(navImg);
// console.log(listEl);






const list = document.querySelector("ul.gallery");

const galleryPictures = images.map(
  (image) =>
    `<li class="item">
    <img class="pictures" src="${image.url}" alt="${image.alt}" width="1260"></img>
    </li>`
);

list.insertAdjacentHTML("beforeend", galleryPictures);



// <style>
//       img {
//         display: block;
//         max-width: 100%;
//         height: auto;
//       }
//       ul {
//         margin: 0;
//         padding: 0;
//       }
//       .gallery {
//         list-style: none;
//         display: block;
//       }
//     </style>