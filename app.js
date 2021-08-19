function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update Casetotal
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // Calculate Total
    calculateTotal();

    function getInputValue(product) {
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal() {
        /* const phoneInput = document.getElementById('phone-number');
        const phoneNumber = parseInt(phoneInput.value); */

        const phoneTotal = getInputValue('phone') * 1219;
        const caseTotal = getInputValue('case') * 59;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;
        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = subTotal + tax;

    }
}
// handle phone increase decreas events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// handle case increase decreas events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});