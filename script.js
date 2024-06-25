const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}


/************************************************ Корзина + купон -------------------------------------------------*/
// Load the cart from local storage
// Load cart from local storage
function loadCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to local storage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add an item to the cart
function addToCart(name, price, size = 'Default', quantity = 1) {
  const cart = loadCart();
  const existingItem = cart.find(item => item.name === name && item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, size, quantity });
  }

  saveCart(cart);
  alert('Producto añadido al carrito');
}

// Handle Add to Cart button click
function handleAddToCart() {
  const name = 'SAVOR AMID VISOR HD';
  const price = 3.00;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart1() {
  const name = 'HAWX ULTRA 85 W';
  const price = 9.00;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart2() {
  const name = 'CLOUD Q12';
  const price = 13.00;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart3() {
  const name = 'REDSTER S7';
  const price = 12.32;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart4() {
  const name = 'RC4 WC SC MT';
  const price = 12.55;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}


function handleAddToCart5() {
  const name = 'RC4 POWER TI AR';
  const price = 12.32;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart6() {
  const name = 'REDSTER Q TI';
  const price = 11.00;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart7() {
  const name = 'MOD1';
  const price = 1.20;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart8() {
  const name = 'LINE MINER PRIZM SAPPHIRE IRIDIUM';
  const price = 3.10;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart9() {
  const name = 'LINE MINER M';
  const price = 2.80;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart10() {
  const name = 'JIBE (CE)';
  const price = 2.34;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart11() {
  const name = 'FALL LINE M';
  const price = 3.10;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart12() {
  const name = 'EDGE 85X W HV GW';
  const price = 8.40;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart13() {
  const name = 'WANTED';
  const price = 1.99;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}


function handleAddToCart15() {
  const name = 'REDSTER Q TI';
  const price = 11.00;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;

  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart16() {
  const name = 'HAWX MAGNA 100';
  const price = 13.20;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}

function handleAddToCart17() {
  const name = 'SHAPE E-V8 SW';
  const price = 10.20;
  const size = document.getElementById('product-size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (size === 'Select Size') {
    alert('Por favor, seleccione un tamaño');
    return;
  }

  addToCart(name, price, size, quantity);
}


// Function to render the cart
function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cart = loadCart();
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><button class="remove" data-index="${index}">Eliminar</button></td>
      <td><img src="images/nowproduct/${encodeURIComponent(item.name)}.jpg" alt="${item.name}" /></td>
      <td>${item.name}</td>
      <td>${item.size}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <input type="number" class="quantity" data-index="${index}" value="${item.quantity}" min="1" />
      </td>
      <td>$${itemSubtotal.toFixed(2)}</td>
    `;
    cartItemsContainer.appendChild(row);
  });

  document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-total').innerText = `$${subtotal.toFixed(2)}`;

  // Add event listeners to remove buttons
  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', (event) => {
      const index = parseInt(event.target.getAttribute('data-index'));
      removeFromCart(index);
    });
  });

  // Add event listeners to quantity inputs
  document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', (event) => {
      const index = parseInt(event.target.getAttribute('data-index'));
      let quantity = parseInt(event.target.value);
      if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        event.target.value = quantity;
      }
      updateQuantity(index, quantity);
    });
  });
}

// Remove an item from the cart
function removeFromCart(index) {
  let cart = loadCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// Update the quantity of an item in the cart
function updateQuantity(index, quantity) {
  let cart = loadCart();
  cart[index].quantity = quantity;
  saveCart(cart);
  renderCart();
}

// Apply coupon and recalculate totals
function applyCoupon() {
  const couponCode = document.querySelector('#coupon input').value;
  const cartSubtotal = parseFloat(document.getElementById('cart-subtotal').innerText.replace('$', ''));
  let discount = 0;

  if (couponCode === 'SAVE10') {
    discount = cartSubtotal * 0.10;
  } else if (couponCode === 'SAVE15') {
    discount = cartSubtotal * 0.15;
  } else if (couponCode === 'SAVE20') {
    discount = cartSubtotal * 0.20;
  } else if (couponCode === 'SVO') {
    discount = cartSubtotal * 0.80;
  } else {
    alert('Código de cupón inválido');
    return;
  }

  const newTotal = cartSubtotal - discount;
  document.getElementById('cart-subtotal').innerText = `$${cartSubtotal.toFixed(2)}`;
  document.getElementById('cart-total').innerText = `$${newTotal.toFixed(2)}`;
  document.querySelector('#coupon input').disabled = true;
  document.querySelector('#coupon button').disabled = true;

  // Display discount in the Descuento section
  document.getElementById('discount-amount').innerText = `$${discount.toFixed(2)}`;
}

// Show installment modal
function showInstallmentModal() {
  document.getElementById('installment-options').style.display = 'block';
}

function hideInstallmentModal() {
  document.getElementById('installment-options').style.display = 'none';
}

function confirmInstallment(installmentDays, interestRate) {
  const cartSubtotal = parseFloat(document.getElementById('cart-subtotal').innerText.replace('$', ''));
  const interest = cartSubtotal * interestRate;
  const totalWithInterest = cartSubtotal + interest;

  // Update total on the page
  document.getElementById('cart-total').innerText = `$${totalWithInterest.toFixed(2)}`;

  // Show confirmation message
  alert(`Ha elegido un plan de pago a ${installmentDays} días.\nTasa de interés: ${(interestRate * 100).toFixed(2)}%\nTotal con interés: $${totalWithInterest.toFixed(2)}`);

  hideInstallmentModal();
}

function showInstallmentModal() {
  document.getElementById('installment-options').style.display = 'block';
}

function hideInstallmentModal() {
  document.getElementById('installment-options').style.display = 'none';
}


// Event listeners for installment options
document.querySelectorAll('.installment-option').forEach(option => {
  option.addEventListener('click', () => {
    const installmentDays = parseInt(option.getAttribute('data-days'));
    const normalRate = parseFloat(option.getAttribute('data-rate-normal'));

    // Check loyalty status here and apply appropriate interest rate
    // Replace this logic with your loyalty status check
    const isLoyalCustomer = false; // Replace with your actual loyalty check

    let interestRate = normalRate;
    if (isLoyalCustomer) {
      interestRate = parseFloat(option.getAttribute('data-rate-loyalty'));
    }

    // Confirm installment and update cart
    confirmInstallment(installmentDays, interestRate);
  });
});

// Apply loyalty bonus (up to 10% discount)
function applyLoyaltyBonus() {
  const cartSubtotal = parseFloat(document.getElementById('cart-subtotal').innerText.replace('$', ''));
  const discount = Math.min(cartSubtotal * 0.10, 10); // Maximum discount is $10
  const newTotal = cartSubtotal - discount;

  document.getElementById('cart-subtotal').innerText = `$${cartSubtotal.toFixed(2)}`;
  document.getElementById('cart-total').innerText = `$${newTotal.toFixed(2)}`;

  // Display discount in the Descuento section
  document.getElementById('discount-amount').innerText = `$${discount.toFixed(2)}`;

  alert(`Se ha aplicado el Bono de cliente habitual.\nDescuento aplicado: $${discount.toFixed(2)}`);
}

// Function to apply discounts based on user type and cart items
function applyDiscounts(userType) {

  // Alert user about the selected user type
  let userTypeMessage = '';
  if (userType === 'student') {
    userTypeMessage = 'Ha elegido el tipo de usuario: Estudiante';
  } else if (userType === 'senior') {
    userTypeMessage = 'Ha elegido el tipo de usuario: Senior';
  }
  alert(userTypeMessage);
  
  const cart = loadCart();

  // Count the number of items in the cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Check user type and apply discounts accordingly
  if (userType === 'student' && itemCount >= 3) {
    // Apply 10% discount
    const cartSubtotal = calculateCartSubtotal(cart);
    const discount = cartSubtotal * 0.10;
    applyDiscount(cart, discount);
  } else if (userType === 'senior' && itemCount >= 5) {
    // Apply 13% discount
    const cartSubtotal = calculateCartSubtotal(cart);
    const discount = cartSubtotal * 0.13;
    applyDiscount(cart, discount);
  }

  // Re-save the updated cart after applying discounts
  saveCart(cart);
  renderCart(); // Update the cart display
}

// Function to calculate cart subtotal
function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to apply discount to cart items
function applyDiscount(cart, discountAmount) {
  // Distribute discount equally among items in cart
  const cartSubtotal = calculateCartSubtotal(cart);
  const discountPerItem = discountAmount / cartSubtotal;

  cart.forEach(item => {
    item.price -= item.price * discountPerItem;
  });
}

// Event listener for user type selection
document.getElementById('user-type').addEventListener('change', (event) => {
  const userType = event.target.value;
  applyDiscounts(userType);
});


// Initial rendering of the cart
renderCart();


// Event listener for loyalty bonus button
document.getElementById('loyalty-bonus-btn').addEventListener('click', applyLoyaltyBonus);
// Event listener for applying the coupon
document.querySelector('#coupon button').addEventListener('click', applyCoupon);

// Event listener for opening the installment modal
document.getElementById('installment-btn').addEventListener('click', showInstallmentModal);

// Event listener for closing the modal
document.querySelector('.close').addEventListener('click', hideInstallmentModal);

// Event listener for confirming the installment
document.getElementById('confirm-installment').addEventListener('click', confirmInstallment);

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
  const modal = document.getElementById('installment-modal');
  if (event.target === modal) {
    hideInstallmentModal();
  }
});
