function createInvestment(name) {
    inputElement = getElementByName(name);
    console.log(inputElement);
}

function getElementByName(name) {
    switch (name) {
        case "RDC DI 30":
            elementId = 'i-30';
            break;
        case "RDC DI 60":
            elementId = 'i-60';
            break;
        case "RDC DI 181":
            elementId = 'i-181';
            break;
        case "RDC DI 361":
            elementId = 'i-361';
            break;
    }

    return document.getElementById(elementId);
}