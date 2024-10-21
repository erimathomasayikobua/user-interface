document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    const mobileMoneyFields = document.getElementById('mobile-money-fields');
    const cardFields = document.getElementById('card-fields');
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Add event listener for changes in payment method selection
    paymentForm.addEventListener('change', function(event) {
        const selectedPaymentMethod = event.target.value;

        if (selectedPaymentMethod === 'mobilemoney') {
            mobileMoneyFields.style.display = 'block';
            cardFields.style.display = 'none';
        } else if (selectedPaymentMethod === 'card') {
            mobileMoneyFields.style.display = 'none';
            cardFields.style.display = 'block';
        }
    });

    // Toggle the dropdown menu visibility
    menuToggle.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });
});
