let currentStep = 0;

function nextStep() {
    const orderSteps = document.getElementById('orderSteps').children;

    // Hide the current step
    orderSteps[currentStep].classList.remove('active');

    // Move to the next step
    currentStep = (currentStep + 1) % orderSteps.length;

    // Show the next step
    orderSteps[currentStep].classList.add('active');
}
