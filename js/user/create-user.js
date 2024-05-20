document.getElementById('create-user-form').addEventListener('submit', function (e) {
    e.preventDefault();
    createUser();
});

function createUser() {
    var name = document.getElementById('name-input').value;
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;

    axios.post('http://localhost:3333/api/user', {
        name: name,
        email: email,
        password: password
    }).then((response) => {
        sessionStorage.setItem("token", response.data.token);
        window.location.href = '../account/index.html';
	})
	.catch((err) => {
		toast(ToastTypes.ALERT, err.response.data.message);
	});
}