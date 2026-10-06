export function Navbar() {
    const nav = document.createElement("header");

    const path = window.location.pathname;

    nav.innerHTML = `
        <div class="
            navbar
        ">

            <nav class="navbar-links">

                <a
                    href="/shop"
                    class="navbar-links"
                    data-link
                >
                    Sneakers
                </a>

                <a
                    href="/cart"
                    class="navbar-links"
                    data-link
                >
                    Carrinho
                </a>

            </nav>
        </div>
    `;

    return nav;
}