import { Navbar } from "../components/navbar.js";
import {
    getCart,
    getCartTotal,
    clearCart,
    removeFromCart
} from "../services/cart-service.js";

export function Cart() {
    const page = document.createElement("div");

    page.innerHTML = `
        <p class="
          header
        ">
            Os melhores sneakers que você já viu, reunidos em um só lugar
        </p>
    `;

    page.appendChild(Navbar());

    const content = document.createElement("main");

    content.className = `
        cart
    `;

    const cart = getCart();
    const total = getCartTotal();

    content.innerHTML = `
        <div class="cart-main">

            <h1 class="
                cart-title
            ">
                Meu carrinho
            </h1>

            <div
                id="cart-items"
                class="cart-items"
            >
            </div>
                        R$ ${total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2
                        })}
                    </strong>

                </div>

                <button
                    class="
                    cart-buy
                    "
                    data-buy
                >
                    Comprar
                </button>

            </div>

        </div>
    `;

    page.appendChild(content);

    const itemsContainer =
        content.querySelector("#cart-items");

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="
                cart-empty
            ">
                <p>
                    Seu carrinho está vazio.
                </p>

                <a
                    href="/shop"
                    data-link
                    class="
                      cart-link
                    "
                >
                    Ir para os Sneakers
                </a>
            </div>
        `;
    } else {
        cart.forEach(item => {

            const element =
                document.createElement("div");

            element.className = `
                bg-white
                rounded-xl
                shadow-sm
                p-5
                flex
                items-center
                justify-between
            `;

            element.innerHTML = `
                <div class="cart-product">

                    <div
                        class="
                           product-image
                        "
                    >${item.image}</div>

                    <div>
                        <h2 class="product-name">
                            ${item.name}
                        </h2>

                        <p class="product-quantity">
                            Quantidade:
                            ${item.quantity}
                        </p>
                    </div>

                </div>

                <div class="product-price-value">
                    <strong>
                        R$ ${(item.price * item.quantity)
                            .toLocaleString("pt-BR", {
                                minimumFractionDigits: 2
                            })}
                    </strong>

                    <button
                        class="
                            cart-remove
                        "
                        data-remove
                    >
                        Remover
                    </button>
                </div>
            `;

            itemsContainer.appendChild(element);

            element.querySelector("[data-remove]")
                .addEventListener("click", () => {
                    removeFromCart(item);
                    page.replaceWith(Cart());
                });
        });
    }

    const buttonBuy = page.querySelector("[data-buy]");
    
        buttonBuy.addEventListener("click", () => {
            buttonBuy.textContent = "Comprado!";
            
            setTimeout(() => {
                buttonBuy.textContent = "Comprar";
                clearCart();
                page.replaceWith(Cart());
            }, 1000);
        });
    

    return page;
}