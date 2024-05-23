const headers = getAuthHeaders();

function getUser() {
    axios.get('http://localhost:3333/api/myself', headers).then((response) => {
        console.log(response);
	});
}

function logout() {
    axios.delete('http://localhost:3333/api/logout', headers).then((response) => {
        console.log(response);
	});
}

getUser()