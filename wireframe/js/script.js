const testimonials = [
    `"This is an amazing product! Highly recommend it to everyone."`,
    `"Great performance and design. Worth every penny!"`,
    `"Perfect for gaming enthusiasts. A must-have accessory."`
];

let currentIndex = 0;

const testimonialText = document.querySelector('.testimonial-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
});



