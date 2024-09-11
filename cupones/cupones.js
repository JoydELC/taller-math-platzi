const inputPrice = document.querySelector('#price');
const inputCoupon  = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const pErrors = document.querySelector('#errors');

// Cupones disponibles
const cupones = {
    "verano": 25,
    "invierno": 15,
    "fest": 45
};

// Función para obtener el descuento
function obtenerDescuento(cupon) {
    // Comprobar si el cupón existe en el objeto cupones
    if (cupones[cupon.toLowerCase()] !== undefined) { 
        const discount = cupones[cupon.toLowerCase()];
        console.log(`El descuento para el cupón ${cupon} es: ${discount}%`);
        return discount;
    } else {
        console.log("Cupón no válido.");
        pErrors.innerText = 'Cupón de descuento no válido.';
        return null; // Devuelve null si el cupón no es válido
    }
}

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // Limpiar mensajes previos
    pErrors.innerText = '';
    pResult.innerText = '';

    const price = parseFloat(inputPrice.value);
    const coupon = inputCoupon.value;
    
    // Validar si los inputs están vacíos
    if (isNaN(price) || price <= 0) {
        pErrors.innerText = 'Por favor, ingresa un precio válido mayor que 0.';
        return;
    }

    // Obtener el descuento asociado al cupón
    const discount = obtenerDescuento(coupon);
    if (discount === null) {
        return; // Detener si el cupón no es válido
    }

    // Si todo es válido, calcular el nuevo precio con descuento
    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `El precio con descuento es: $${newPrice.toFixed(2)}`;
}
