import { useState } from 'react';

export function Toast({ message, color }) {
    return (
        <div
            id="toast-simple"
            className={`flex items-center w-full max-w-xs p-4 space-x-4  divide-x rounded-lg shadow 
                    text-white divide-white space-x fixed bottom-5 left-5 z-50 ${
                        color === 'green' ? 'bg-green' : 'bg-red'
                    }`}
            role="alert"
        >
            <svg
                className="w-5 h-5 text-white rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                />
            </svg>
            <div className="pl-4 text-sm font-normal">{message}</div>
        </div>
    );
}

const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, color, duration) => {
        const toastId = Date.now();
        const newToast = { id: toastId, message, color, duration };

        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => {
            setToasts((prevToasts) =>
                prevToasts.filter((toast) => toast.id !== toastId)
            );
        }, duration);
    };

    return {
        showToast,
        ToastContainer: () => (
            <div>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        color={toast.color}
                    />
                ))}
            </div>
        ),
    };
};

export default useToast;
