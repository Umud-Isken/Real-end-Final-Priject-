let BasketComputera = JSON.parse(localStorage.getItem("basket")) || [];
console.log(BasketComputera);

function displayBasketItems(filteredItems = BasketComputera) {
    const tbody = document.querySelector(".tbody");
    tbody.innerHTML = ""; 

    if (filteredItems.length === 0) {
        tbody.innerHTML = `<tr><td class="ccc" colspan="6">You have no computers in your basket</td></tr>`;
        return;
    }

    filteredItems.forEach((Computer, index) => {
        let Com = `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>
                <img class="ImageModal" style="width: 50px;" src="${Computer.imageOfbasket}" alt="">
            </td>
            <td>${Computer.kategoryOFcomp}</td>
            <td>
                <div style="border: 2px solid black;" class="qu-container">
                    <button class="btn btn-light" onclick="decrement(${index})">-</button>
                    <span id="quantity-${index}">${Computer.quantity || 1}</span>
                    <button class="btn btn-light" onclick="increment(${index})">+</button>
                </div>
            </td>
            <td style="color: black;">${Computer.priceOfComp}</td>
            <td style="color: black;">
                <button class="btn btn-danger" onclick="removeItem(${index})">Sil</button>
                <button class="btn btn-success">Buy</button>
            </td>
        </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', Com);
    });
}

displayBasketItems();

function removeItem(index) {
    BasketComputera.splice(index, 1); 
    localStorage.setItem("basket", JSON.stringify(BasketComputera)); 
    displayBasketItems(); 
}

function decrement(index) {
    let cc = document.getElementById(`quantity-${index}`);
    let currentQuantity = parseInt(cc.textContent);

    if (currentQuantity > 1) {
        cc.textContent = currentQuantity - 1;
        BasketComputera[index].quantity = currentQuantity - 1; 
        localStorage.setItem("basket", JSON.stringify(BasketComputera)); 
    }
}

function increment(index) {
    let cc = document.getElementById(`quantity-${index}`);
    cc.textContent = parseInt(cc.textContent) + 1;
    BasketComputera[index].quantity = parseInt(cc.textContent); 
    localStorage.setItem("basket", JSON.stringify(BasketComputera)); 
}

// Search functionality
document.querySelector(".btnbt").addEventListener("click", function () {
    let searchInput = document.querySelector(".SearchInp").value.toLowerCase();
    
    let filtered = BasketComputera.filter((computer) => {
        return computer.kategoryOFcomp.toLowerCase().includes(searchInput);
    });

    displayBasketItems(filtered); 
    document.querySelector(".SearchInp").value = ""; 
});