// Add event listeners to quantity buttons
const quantityBtns = document.querySelectorAll('.quantity-btn');
quantityBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentElement.querySelector('input');
    const currentValue = parseInt(input.value);
    if (btn.textContent === '+') {
      input.value = currentValue + 1;
    } else if (btn.textContent === '-' && currentValue > 1) {
      input.value = currentValue - 1;
    }
  });
});
