class ToastTypes {
    static SUCCESS = "success";
    static ALERT = "alert";
}

function toast(type, message) {
    if (!message) message = 'Ops! Tivemos um erro.'

    clearAllToast();
    generateToastComponent(type, message);
    lucide.createIcons();
}


function generateToastComponent(type, message) {
    const body = document.querySelector('body');
    const toast = document.createElement('div');

    switch (type) {
        case ToastTypes.ALERT:
            var icon = `<i class="icon" data-lucide="triangle-alert"></i>`;
            break
        case ToastTypes.SUCCESS:
            var icon = `<i class="icon" data-lucide="thumbs-up"></i>`;
            break
        default:
            throw new Exception()
    }

    toast.innerHTML = `
        <div class="toast ${type}">
            <div class="icon-container">
                ${icon}
            </div>
            <div class="message-container">
                ${message}
            </div>
        </div>
    `;

    body.insertBefore(toast, body.firstChild);
    removeToastAfterDelay(toast);
}

async function removeToastAfterDelay(toast) {
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

function clearAllToast() {
    const toasts = document.querySelectorAll('.toast');

    toasts.forEach((toast) => {
        toast.remove();
    });
}