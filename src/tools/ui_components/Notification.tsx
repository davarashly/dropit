import { toast } from "react-toastify";
import { TypeOptions } from "react-toastify/dist/types";

const Notification = (text: string, type: TypeOptions = "info"): void => {
  toast(text, {
    position: "bottom-right",
    autoClose: 1250,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    type,
  });
};

export default Notification;
