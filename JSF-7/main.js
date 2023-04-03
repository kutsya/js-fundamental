//? Task 1

window.open('', '', 'width=300, height=300');

setTimeout(function () {
    window.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
    window.moveTo(200, 200);
}, 4000);

setTimeout(function () {
    window.close();
}, 6000);

//? Task 2

// html

//? Task 3

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'white';
});

//? Task 4

function deleteSelected() {
    let select = document.getElementById("mySelect");
    let index = select.selectedIndex;
    select.options[index].remove();
};

function deleteSelected() {
    let select = document.getElementById("mySelect");
    let index = select.selectedIndex;
    if (index === -1) {
        alert("Please select an item to delete.");
    } else {
        select.options[index].remove();
    }
};

//? Task 5

$(document).ready(function () {
    $('#myButton').click(function () {
        alert('I was pressed!');
    });

    $('#myButton').mouseenter(function () {
        alert('Mouse on me!');
    });

    $('#myButton').mouseleave(function () {
        alert('Mouse is not on me!');
    });
});

$('#myButton').text('Live button!');

$('#myButton').html('<strong>Live button!</strong>');

//? Task 6

$(window).resize(function () {
    let width = $(window).width();
    let height = $(window).height();
    $('#size').text('Ширина: ' + width + ', Висота: ' + height);
});

//? Task 7

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const output = document.querySelector('p');

const citiesByCountry = {
    ger: ['Berlin', 'Hamburg', 'Munich'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Odessa']
};

function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    citySelect.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
    output.textContent = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${citySelect.options[citySelect.selectedIndex].text}`;
}

countrySelect.addEventListener('change', updateCities);
citySelect.addEventListener('change', () => {
    output.textContent = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${citySelect.options[citySelect.selectedIndex].text}`;
});

updateCities();