import { toast } from "react-toastify";



const successToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
const errorToast = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
const defaultToast = (message) => {
    toast(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


const dismissToast = (toastId) => {
    if (toastId)
        return toast.dismiss(toastId)
    else
        toast.dismiss();
}


export { successToast, errorToast, defaultToast, dismissToast }
