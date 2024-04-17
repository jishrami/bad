const shop = document.querySelector('#shop-section');
const highlight = document.querySelector('#hilight-section');
const url = './data/inventory.json';

async function getInventory() {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
    displayHilight(data);
}

function displayItems(items) {
    const inv = items.items;
    const h2 = document.createElement('h2');
    h2.classList.add('shop-title');
    h2.textContent = "bad. catalog";
    shop.appendChild(h2);

    const shopContent = document.createElement('div');
    shopContent.classList.add('shop-content');
    shop.appendChild(shopContent);
    for (let item of inv) {

        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}, ${item.description}" class="item-img">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price}</p>
        `;
        shopContent.appendChild(div);
    }
}

function displayHilight(items) {
    const inv = items.items;
    const h2 = document.createElement('h2');
    h2.classList.add('shop-title');
    h2.textContent = "bad. sales";
    highlight.appendChild(h2);

    const shopContent = document.createElement('div');
    shopContent.classList.add('shop-content');
    highlight.appendChild(shopContent);
    for (let item of inv) {
        const div = document.createElement('div');  
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}, ${item.description}" class="item-img">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price}</p>
        `;
        shopContent.appendChild(div);   
    }
}

getInventory();