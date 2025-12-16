const imageUrls = [
    "https://i.pinimg.com/236x/0f/20/2a/0f202a9b764a37c5c3718e2711f760c3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTE2GWLQMBCg0uRPqItLjjc4Y0K5AktJrRrA&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzUoEo01Cc86HEV3e0lFQeOFIGIF4wCrb-A&s",
    "https://i.pinimg.com/236x/69/df/12/69df12ce8a940834ffaadd940e0ab2e4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGci1YPl18OKYcFuLxsO9vgwj2hfnW-F4pXA&s"
];

let currentImageIndex = 0;

const image = document.getElementById('image');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    currentImageIndex++;
    
    if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0;
    }
    
    image.src = imageUrls[currentImageIndex];
});