var modalIsOpen = false;
const headers = getAuthHeaders();

async function getUser() {
	const response = await axios.get('http://localhost:3333/api/myself', headers);

	updateTopContent(response.data);
}

function logout() {
	axios.delete('http://localhost:3333/api/logout', headers).then((response) => {
		resetPage();
	});
}

function deleteAccount() {
	axios.delete('http://localhost:3333/api/myself', headers).then((response) => {
		resetPage();
	});
}

function toggleOpenModal() {
	const modal = document.querySelector('#modal');

	if (modalIsOpen) {
		modal.style.display = 'none';
	} else {
		modal.style.display = 'flex';
	}

	modalIsOpen = !modalIsOpen;
}

function addEventsListeners() {
	document.querySelector('.image-container').addEventListener('click', () => toggleOpenModal());
	document.querySelector('.close-button').addEventListener('click', () => toggleOpenModal());
}

async function changeAvatarPicture(picture) {
	await axios.put(`http://localhost:3333/api/user/picture/${picture}`, null, headers);
	location.reload();
}

function updateTopContent(user) {
	if (!user.picture) {
		const element = document.createElement('i');

		element.setAttribute('class', 'without-avatar-icon');
		element.setAttribute('data-lucide', 'user');

		document.querySelector('.image-container').appendChild(element);
		lucide.createIcons();
	} else {
		const element = document.createElement('img');

		element.setAttribute('class', 'avatar-picture');
		element.setAttribute('src', `/assets/svgs/pic-${user.picture}.svg`);

		document.querySelector('.image-container').appendChild(element);
	}

	document.querySelector('.top-content .info h3').innerText = user.name;
}

function resetPage() {
	sessionStorage.removeItem('id');
	sessionStorage.removeItem('token');
	window.location.href = '/';
}

async function recreateAccount() {
	axios
		.post("http://localhost:3333/api/user/account", null, headers)
		.then((response) => {
			window.location.href = '../account/index.html';
		}).catch((err) => {
			toast(ToastTypes.ALERT, err.response.data.message);
		});
}

getUser();
addEventsListeners();