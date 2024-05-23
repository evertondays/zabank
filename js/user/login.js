document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});

async function login() {
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;

    axios.post('http://localhost:3333/api/login', {
        email: email,
        password: password
    }).then((response) => {
        sessionStorage.setItem("id", response.data.id);
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("token", response.data.token);

        window.location.href = '../account/index.html';
	})
	.catch((err) => {
		toast(ToastTypes.ALERT, err.response.data.message);
	});
}