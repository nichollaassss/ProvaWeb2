import { addToCart } from "../services/cart-service.js";

export function ProductCard(product) {
    const card = document.createElement("article");

    card.className = `
        product-card-article
    `;

    card.innerHTML = `
        <div class="
           product-card-main
        ">
            <div class="product-image">${product.image}</div>
        </div>

        <div class="product-cards">

            <h2 class="product-name">
                ${product.name}
            </h2>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="
               product-price
            ">

                <span class="product-price-value">
                    R$ ${product.price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2
                    })}
                </span>

                <button
                    class="
                       cart-add
                    "
                    data-add-cart
                >
                    Adicionar
                </button>

            </div>

        </div>
    `;

    const button = card.querySelector("[data-add-cart]");

    button.addEventListener("click", () => {
        addToCart(product);

        button.textContent = "Adicionado!";

        setTimeout(() => {
            button.textContent = "Adicionar";
        }, 1000);
    });

    return card;
}