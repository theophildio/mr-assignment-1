// Trending Now Product
const container = document.getElementById("tranding-products");
const url = "https://fakestoreapi.com/products";

fetch(url)
  .then(res => res.json())
  .then(products => {
    const topTranding = products
      .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
      .slice(0, 3);

    topTranding.forEach(product => {
      const words = product.title.split(" ");
      const shortTitle =
        words.length > 4 ? words.slice(0, 4).join(" ") + "..." : product.title;

      container.innerHTML += `
        <div class="card bg-base-100 md:w-96 shadow-sm">
          <figure class="h-52 flex items-center justify-center bg-gray-200">
            <img
              class="max-h-full object-contain p-3"
              src="${product.image}"
              alt="${shortTitle}"
            />
          </figure>

          <div class="card-body">
            <div class="flex items-center justify-between gap-3">
              <span
                class="badge bg-sky-100 rounded-xl px-5 text-xs text-center text-indigo-600 capitalize"
              >
                ${product.category}
              </span>

              <p class="text-right">
                <i class="fa-solid fa-star text-yellow-500"></i>
                ${product.rating?.rate || 0} (${product.rating?.count || 0})
              </p>
            </div>

            <p class="text-lg">${shortTitle}</p>
            <h5 class="card-title">$${product.price}</h5>

            <div class="card-actions justify-between pt-5">
              <button class="btn btn-outline btn-sm w-40">
                <i class="fa-regular fa-eye"></i> Details
              </button>
              <button class="btn btn-primary btn-sm w-40">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });
