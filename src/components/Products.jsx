import React from "react";
import Swal from "sweetalert2";

const products = [
  { id: 1, name: "Bass Boost Headphones", price: "$99", img: "/img1.png" },
  { id: 2, name: "Gaming Headset X2", price: "$129", img: "/img2.png" },
  { id: 3, name: "Studio Pro", price: "$199", img: "/img5.png" },
  { id: 4, name: "Wireless Beats", price: "$149", img: "/img3.png" },
  { id: 5, name: "Noise Cancelling Max", price: "$249", img: "/img4.png" },
  { id: 6, name: "Lite Comfort", price: "$79", img: "/img5.png" },
  { id: 7, name: "Bluetooth Boom", price: "$109", img: "/img6.png" },
  { id: 8, name: "Over-Ear Supreme", price: "$179", img: "/img1.png" },
];

const handleOrder = async (productName) => {
  const { value: formValues } = await Swal.fire({
    title: `Order: ${productName}`,
    html:
      `<input id="swal-name" class="swal2-input" placeholder="Your Name">` +
      `<input id="swal-address" class="swal2-input" placeholder="Your Address">`,
    focusConfirm: false,
    confirmButtonText: "Place Order",
    preConfirm: () => {
      const name = document.getElementById("swal-name").value;
      const address = document.getElementById("swal-address").value;
      if (!name || !address) {
        Swal.showValidationMessage("Please fill out both fields");
      }
      return { name, address };
    },
    background: "#1a1a1a",
    color: "#fff",
  });

  if (formValues) {
    Swal.fire({
      title: "Order Confirmed!",
      text: `Thank you ${formValues.name}, your order has been placed.`,
      icon: "success",
      confirmButtonColor: "#00FFB3",
      background: "#1a1a1a",
      color: "#fff",
    });
  }
};

const Products = () => {
  return (
    <section className="bg-neutral-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00FFB3]">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-800 rounded-xl p-4 shadow-lg flex flex-col items-center text-center transform transition-transform duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-[#00FFB3]/50"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-contain object-center bg-white rounded-lg mb-4 p-2"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-[#00FFB3] text-lg mb-4">{product.price}</p>
              <button
                onClick={() => handleOrder(product.name)}
                className="bg-[#00FFB3] text-black px-4 py-2 rounded-full font-medium hover:bg-[#00e6a5] transition"
              >
                Place Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
