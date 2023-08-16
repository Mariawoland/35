const services = [
    {
        image: 'img/img13.png',
        title: 'Free Delivery',
        text: `Lorem ipsum dolor sit amet, consectetu
        adipiscing elit, sed do eiusmod tempor`
    },
    {
        image: 'img/img14.png',
        title: 'Trusted Platfrom',
        text: `Lorem ipsum dolor sit amet, consectetu
        adipiscing elit, sed do eiusmod tempor`
    },
    {
        image: 'img/img15.png',
        title: 'Here For You',
        text: `Lorem ipsum dolor sit amet, consectetu
        adipiscing elit, sed do eiusmod tempor`
    },
];

const servicecard = document.getElementById("setting-005");

function postACard() {

    services.map((postACardData) => {

        const postservicecard = document.createElement('div');
        postservicecard.classList.add("setting-006");
        postservicecard.classList.add("col-md-4");
        postservicecard.classList.add("col-12");
        postservicecard.innerHTML = `
        <img src="${postACardData.image}">
        <span class="text-010">${postACardData.title}</span>
        <p class="text-011">${postACardData.text}</p>
        `
        servicecard.appendChild(postservicecard);
    });

}

postACard();


const baratebi = document.getElementById('setting-007');


axios.get('https://fakestoreapi.com/products').then(response => {

    const barati = response.data;

    barati.forEach(data => {
        const card = createCard(data);
        baratebi.appendChild(card);
    });

}).catch(error => {
    console.error('Error fetching data:', error);
});


function createCard(data) {

    const card = document.createElement('div');
    card.classList.add('col-lg-3');
    card.classList.add('col-md-4')
    card.classList.add('col-12');
    card.classList.add('p-4');

    const inside = document.createElement('div');
    inside.classList.add('setting-008');

    const insideInside = document.createElement("a");
    insideInside.href = "#";

    const title = document.createElement('h4');
    title.textContent = data.title;

    const price = document.createElement('p');
    price.textContent = "Price: " + data.price;

    const img = document.createElement('img');
    img.src = data.image;

    card.appendChild(inside);
    inside.appendChild(insideInside);
    insideInside.appendChild(img);
    insideInside.appendChild(title);
    inside.appendChild(price);

    return card;
}
