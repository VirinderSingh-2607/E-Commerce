import React from 'react'

function CartPage() {
  return (
    <>
    <div class="container mx-auto my-8">
        <h1 class="text-3xl font-semibold mb-4">Your Premium Cart</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-2">Product 1</h2>
                <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="text-lg font-bold text-gray-800">$99.99</span>
            </div>

        </div>

        <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Order Summary</h2>

    
            <div class="flex justify-between mb-2">
                <span class="text-gray-600">Subtotal:</span>
                <span class="text-gray-800">$299.97</span>
            </div>

            <div class="flex justify-between mb-2">
                <span class="text-gray-600">Tax (10%):</span>
                <span class="text-gray-800">$29.99</span>
            </div>

            <div class="flex justify-between mb-4">
                <span class="text-xl font-bold">Total:</span>
                <span class="text-xl font-bold">$329.96</span>
            </div>

            <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Proceed to Checkout</button>

        </div>

    </div>
    </>
  )
}

export default CartPage