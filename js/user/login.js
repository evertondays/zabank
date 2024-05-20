document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});

async function login() {
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;

    const response = await axios.post('http://localhost:3333/api/login', {
        email: email,
        password: password
    }).then((response) => {
	})
	.catch((err) => {
		toast(ToastTypes.ALERT, err.response.data.message);
	});
}