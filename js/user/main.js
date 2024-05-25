const headers = getAuthHeaders();

function getUser() {
    axios.get('http://localhost:3333/api/myself', headers).then((response) => {
	});
}

function logout() {
    axios.delete('http://localhost:3333/api/logout', headers).then((response) => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('token');
        window.location.href = '/';
	});
}

getUser()