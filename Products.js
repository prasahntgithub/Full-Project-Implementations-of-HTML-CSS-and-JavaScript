const products = [
  { name: "JavaScript Book", category: "books", price: 499 },
  { name: "Bluetooth Speaker", category: "gadgets", price: 1500 },
  { name: "HTML & CSS Guide", category: "books", price: 399 },
  { name: "Smartwatch", category: "gadgets", price: 2500 }
];

function renderProducts() {
  const category = document.getElementById("filterCategory").value;
  const sortOrder = document.getElementById("sortOrder").value;
  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  filtered.sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
    container.appendChild(div);
  });
}

window.onload = renderProducts;
