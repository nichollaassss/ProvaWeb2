import { Navbar } from "../components/navbar.js";
import { ProductCard } from "../components/product-card.js";
import {
    getProducts
} from "../services/product-service.js";

export async function Shop() {
    const page = document.createElement("div");

    page.innerHTML = `
        <p class="header">
            Os melhores sneakers que você já viu, reunidos em um só lugar
        </p>
    `;

    page.appendChild(Navbar());

    const content = document.createElement("main");

    content.className = `
      shop-main
    `;

    content.innerHTML = `
        <div class="shop">

            <div>
                <div class="
              shop-container
            ">
                <h1 class="shop-title">
                    Sneakers
                </h1>

                <p class="shop-subtitle">
                    Veja os sneakers disponíveis para você!
                </p>
                </div>
            </div>

            <div
                id="products"
                class="
                shop-products
                "
            >
                <p>Carregando produtos...</p>
            </div>

        </div>
    `;

    page.appendChild(content);

    const productsContainer =
        content.querySelector("#products");

    try {
        const products = await getProducts();

        productsContainer.innerHTML = "";

        products.forEach(product => {
            productsContainer.appendChild(
                ProductCard(product)
            );
        });

    } catch (error) {
        console.error(error);

        productsContainer.innerHTML = `
            <p>
                Erro ao carregar os produtos.
            </p>
        `;
    }

    return page;
}