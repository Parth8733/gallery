//pointing to mainImage
var displayImage = document.querySelector('.mainImage');
//pointing to ul tag
var ul = document.querySelector('.image');
var figureCaption = document.querySelector('figcaption');
console.log(figureCaption);
//creating array for all thumbnail images
var array = ['images/flowers-pink-small.jpg', 'images/flowers-purple-small.jpg',
    'images/flowers-red-small.jpg', 'images/flowers-white-small.jpg',
    'images/flowers-yellow-small.jpg'];

//creating li elements and img tag and adds it to ul tag
for (var i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
    var img = document.createElement('img');
    li.appendChild(img);
    //set the src to image tag
    img.setAttribute('src', array[i]);
    // assigning class to image tag
    img.setAttribute('class', `image${i + 1}`);
}

//pointing out all images
var image1 = document.querySelector('.image1');
var image2 = document.querySelector('.image2');
var image3 = document.querySelector('.image3');
var image4 = document.querySelector('.image4');
var image5 = document.querySelector('.image5');

//creating function for changing image when user click on thumbnail
function changePhoto(e) {
    var imageSrc = e.target.getAttribute('src');
    imageSrc = imageSrc.replace('small', 'large');
    displayImage.setAttribute('src', imageSrc);
    imageSrc = imageSrc.substr(7);
    imageSrc = imageSrc.slice(0, -4);
    imageSrc = imageSrc.replace(/-/g, ' ');
    imageSrc = imageSrc.toUpperCase();
    figureCaption.textContent = imageSrc;
}

//adding click event on all images.
image1.addEventListener('click', changePhoto);
image2.addEventListener('click', changePhoto);
image3.addEventListener('click', changePhoto);
image4.addEventListener('click', changePhoto);
image5.addEventListener('click', changePhoto);




