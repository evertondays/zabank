const headers = getAuthHeaders();

function createInvestment(name) {
    inputElement = getElementByName(name);

    axios.post('http://localhost:3333/api/investment', {
        name: name,
        qtt:  inputElement.value
    }, headers).then(() => {
        inputElement.value = null;
	})
	.catch((err) => {
		toast(ToastTypes.ALERT, err.response.data.message);
	});
}

function listInvestments(name) {
    axios.get('http://localhost:3333/api/investment', headers).then((response) => {
        generateTableItems(response.data);
	});
}

function generateTableItems(items) {
    const table = document.getElementById('list-table');

    items.forEach(element => {
        let item = generateTableItem(element);
        table.appendChild(item);
    });
}

function generateTableItem(item) {
    let html = `
        <td>${item.name}</td>
        <td>${item.qtt}</td>
    `;

    let element = document.createElement("tr");
    element.innerHTML = html;
    return element;
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

listInvestments()