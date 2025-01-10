const benefits = [
    `"Description for Benefit 1"`,
    `"Description for Benefit 2"`,
    `"Description for Benefit 3"`
];

let currentBenefitIndex = 0;

const benefitText = document.querySelector('.benefit-text');
const prevBenefitButton = document.querySelector('.prev-benefit');
const nextBenefitButton = document.querySelector('.next-benefit');

function updateBenefit(index) {
    benefitText.textContent = benefits[index];
}

prevBenefitButton.addEventListener('click', () => {
    currentBenefitIndex = (currentBenefitIndex === 0) ? benefits.length - 1 : currentBenefitIndex - 1;
    updateBenefit(currentBenefitIndex);
});

nextBenefitButton.addEventListener('click', () => {
    currentBenefitIndex = (currentBenefitIndex === benefits.length - 1) ? 0 : currentBenefitIndex + 1;
    updateBenefit(currentBenefitIndex);
});
