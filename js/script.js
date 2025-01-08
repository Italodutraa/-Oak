document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("form-container");
    const listContainer = document.getElementById("list-container");
    const showFormButton = document.getElementById("show-form-btn");
    const productForm = document.getElementById("product-form");
    const productTableBody = document.querySelector("#product-table tbody");

    let products = [];

    // Exibir formulário ao clicar no botão "Cadastrar Novo Produto"
    showFormButton.addEventListener("click", () => {
        formContainer.classList.remove("hidden");
        listContainer.classList.add("hidden");
    });

    // Função para exibir a lista de produtos
    const showList = () => {
        formContainer.classList.add("hidden");
        listContainer.classList.remove("hidden");
    };

    // Atualizar tabela de produtos
    const updateTable = () => {
        productTableBody.innerHTML = ""; // Limpa a tabela
        products.sort((a, b) => a.price - b.price); // Ordena produtos pelo valor

        // Adiciona cada produto na tabela
        products.forEach((product) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>R$ ${product.price.toFixed(2)}</td>
            `;
            productTableBody.appendChild(row);
        });
    };

    // Evento de envio do formulário
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtém valores dos campos
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = parseFloat(document.getElementById("price").value);
        const available = document.getElementById("available").value;

        // Adiciona o novo produto à lista
        products.push({ name, description, price, available });

        // Atualiza a tabela
        updateTable();

        // Exibe a lista de produtos
        showList();

        // Limpa o formulário
        productForm.reset();
    });
});
