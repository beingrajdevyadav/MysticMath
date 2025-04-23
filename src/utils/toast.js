import { toast } from "react-toastify";

export const showSuccessToast = (message)=>{
    toast.success(message, {
        position:"top-right",
        autoClose:3000,
        theme:"dark",
    });
};


