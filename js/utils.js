const userId = sessionStorage.getItem('id');
const token = sessionStorage.getItem('token');

function autoRedirect() {
    if (userId && token) return;

    window.location.href = '/';
}

function getAuthHeaders() {
    return {
        headers: {
            id: userId,
            token: token
        }
    };
}

autoRedirect();