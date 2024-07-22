const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result');

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        resultContainer.innerHTML = "Please enter a valid date.";
        resultContainer.style.color = '#ff4d4d';
        resultContainer.style.animation = 'shake 0.5s';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultContainer.innerHTML = `You are ${age} years old.`;
    resultContainer.style.color = '#4CAF50';
    resultContainer.style.animation = 'slide-up 1s';
}
