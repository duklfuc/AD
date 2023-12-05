var banner = document.getElementById('banner');
var imgArr = [
    '1m.jpg',
            'tuylip.jpg',
            'polo.jpg',
            'aothun.jpg',
            'doraemon.jpg'
];
var length = imgArr.length;
var index = 0;

function first() {
    index = 0;
    banner.src = "img/" + imgArr[index];
}

function next() {
    index++;
    if (index >= length) {
        index = 0;
    }
    banner.src = "img/" + imgArr[index];
}

function previous() {
    index--;
    if (index < 0) {
        index = length - 1;
    }
    banner.src = "img/" + imgArr[index];
}

function last() {
    index = length - 1;
    banner.src = "img/" + imgArr[index];
}

function selectTemplate(template) {
    console.log("Template selected: " + template);
    // Add logic to apply the selected template to the product preview
}

function changeImageByColor() {
    var colorSelect = document.getElementById('color');
    var selectedColor = colorSelect.options[colorSelect.selectedIndex].value;

    if (selectedColor === 'red') {
        banner.src = "img/doraemon.jpg";
    } else if (selectedColor === 'blue') {
        banner.src = "img/polo.jpg";
    } else if (selectedColor === 'tuylip') {
        banner.src = "img/tuylip.jpg";
    }
}

function placeOrder() {
    var colorSelect = document.getElementById('color');
    var selectedColor = colorSelect.options[colorSelect.selectedIndex].value;

    var sizeSelect = document.getElementById('size');
    var selectedSize = sizeSelect.options[sizeSelect.selectedIndex].value;

    // Add logic to handle the order, e.g., send data to a server, show a confirmation message, etc.
    alert("Order placed successfully!\nColor: " + selectedColor + "\nSize: " + selectedSize);
}
