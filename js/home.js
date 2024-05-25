const userId = sessionStorage.getItem('id');
const token = sessionStorage.getItem('token');

function homePageAutoRedirect() {
    if (!userId || !token) return;
    window.location.href = '/pages/account/index.html';
}

homePageAutoRedirect();