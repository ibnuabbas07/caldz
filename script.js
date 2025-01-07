// Array untuk menyimpan produk yang ditambahkan ke keranjang
const cartItems = [];
const cartList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Tambahkan event listener ke setiap tombol "Tambah ke Keranjang"
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseInt(button.getAttribute("data-price"));

        // Tambahkan produk ke keranjang
        cartItems.push({ name, price });
        updateCart();
    });
});

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    // Bersihkan daftar keranjang
    cartList.innerHTML = "";

    // Tambahkan item ke dalam keranjang
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    // Perbarui total harga
    totalPriceElement.textContent = total;
}
