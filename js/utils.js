function getAuthHeaders() {
    const userId = sessionStorage.getItem('id');
    const token = sessionStorage.getItem('token');

    return {
        headers: {
            id: userId,
            token: token
        }
    };
}