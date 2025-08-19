
document.getElementById('data-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !lastname || !phone) {
        alert('لطفاً تمام فیلدها را پر کنید!');
        return;
    }
        const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');
    setTimeout(() => {
        document.getElementById('data-form').reset();
        successMessage.classList.remove('show');
        successMessage.classList.add('hidden');
    }, 3000);
});