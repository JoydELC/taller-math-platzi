const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const pErrors = document.querySelector('#errors');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // Limpiar mensajes previos
    pErrors.innerText = '';
    pResult.innerText = '';

    const price = parseFloat(inputPrice.value);
    const discount = parseFloat(inputDiscount.value);

    // Validar si los inputs están vacíos
    if (isNaN(price) || price <= 0) {
        pErrors.innerText = 'Por favor, ingresa un precio válido mayor que 0.';
        return;
    }
    
    if (isNaN(discount) || discount < 0 || discount > 100) {
        pErrors.innerText = 'Por favor, ingresa un descuento entre 0% y 100%.';
        return;
    }

    // Si todo es válido, calcular el nuevo precio con descuento
    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `El precio con descuento es: $${newPrice.toFixed(2)}`;
}
