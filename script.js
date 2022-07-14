// selectors
const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length -1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-img');
const lightboxButtons = document.querySelectorAll('.lightbox-btn')
const lightboxButtonRight = document.querySelector('.lightbox-btn.btn-right')
const lightboxButtonLeft = document.querySelector('.lightbox-btn.btn-left')
let activeImage;


//functions


const showLightbox = () => {
	lightboxContainer.classList.add('active')
}

const hideLightbox = () => {
	lightboxContainer.classList.remove('active')
}

const setActiveImage = (image) => {
	lightboxImage.src = image.dataset.imagesrc;   //set src of lightbox image to custom atribute 'data-imagesrc' of clicked image (e).
	activeImage = lightboxArray.indexOf(image)    //get index of image from array  
}

transitionSlideLeft = () => {
	if (activeImage === 0) {
		setActiveImage(lightboxArray[lastImage])
	} else {
		setActiveImage(lightboxArray[activeImage].previousElementSibling);
	}
}
transitionSlideRight = () => {
	if (activeImage === lastImage) {
		setActiveImage(lightboxArray[0])
	} else {
		setActiveImage(lightboxArray[activeImage].nextElementSibling);
	}
}

const transitionSlide = (item) => {
	if (item.includes('button-l')) {
		transitionSlideLeft();
	} else {
		transitionSlideRight();
	}
}



//listeners
lightboxEnabled.forEach((image) => {
	image.addEventListener('click', (e) => {
		setActiveImage(image);
		// showLightbox();
		setTimeout(function() { showLightbox(); }, 300);
	
	});
});

lightboxContainer.addEventListener('click', () => {
	hideLightbox();
})

lightboxButtons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		transitionSlide(e.currentTarget.id);
	})
})





//poprzednie:

// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('.gallery img');
// console.log(images);

// images.forEach((x) => {
// 	x.addEventListener('click', (e) => {
// 		lightbox.classList.add('active');
// 		const bigImg = document.createElement('img');
// 		const link = x.src;
// 		newlink = link.replace('s.jpg', '.jpg');
//         bigImg.src = newlink;
// 		lightbox.appendChild(bigImg)
//         bigImg.classList.add('big-img')
// 	});
// });
