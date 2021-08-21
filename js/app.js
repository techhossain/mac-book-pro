/*
* Extrat Feature function
*/
function extraFeature(targetField, unitPrice) {
  const extraField = document.getElementById(targetField);
  const extraText = extraField.innerText;
  const extraPrice = parseInt(extraText);
  extraField.innerText = unitPrice;

  cartTotal();
}

/*
* Cart Price Calculation
*/
function cartTotal() {
  const unitCost = parseInt(document.getElementById('unit-price').innerText);
  const extraMemoryCost = parseInt(document.getElementById('extra-memory-price').innerText);
  const extraStorageCost = parseInt(document.getElementById('extra-storage-price').innerText);
  const delivaryCost = parseInt(document.getElementById('delivery-charge').innerText);
  // Calculate cart total
  const cartTotal = unitCost + extraMemoryCost + delivaryCost + extraStorageCost;

  // Set total value
  document.getElementById('total-price').innerText = cartTotal;

  // Update Discount Total
  document.getElementById('discount-total').innerText = cartTotal;
}


/*
* Promo Calculation
*/

function promoCalculation(cupon) {

  const promo = document.getElementById('promo');
  const promoCode = promo.value;

  if (promoCode.toLowerCase().trim() == cupon.toLowerCase()) {
    const discountField = document.getElementById('discount-total');
    const discountCurrent = parseInt(discountField.innerText);
    const discountedPrice = discountCurrent - ((discountCurrent * 20) / 100);
    discountField.innerText = discountedPrice.toFixed(2);
    promo.value = '';
    // disable apply button of promo
    document.getElementById('apply').classList.add('disabled');
  }
  else {
    promo.value = '';
    console.log('Invalid Promo');
  }
}



//  Extra Mamory 
document.getElementById('ram-16gb').addEventListener('click', function () {
  extraFeature('extra-memory-price', 180);
});

document.getElementById('ram-8gb').addEventListener('click', function () {
  extraFeature('extra-memory-price', 0);
});

//  Extra Storage 
document.getElementById('ssd-1024').addEventListener('click', function () {
  extraFeature('extra-storage-price', 180);
});
document.getElementById('ssd-512').addEventListener('click', function () {
  extraFeature('extra-storage-price', 100);
});
document.getElementById('ssd-256').addEventListener('click', function () {
  extraFeature('extra-storage-price', 0);
});
// Delivery Change
document.getElementById('fast-delivery').addEventListener('click', function () {
  extraFeature('delivery-charge', 20);
});
document.getElementById('standard-delivery').addEventListener('click', function () {
  extraFeature('delivery-charge', 0);
});

// Promo Events
document.getElementById('apply').addEventListener('click', function () {
  promoCalculation('stevekaku');
});