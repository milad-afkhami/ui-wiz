import toastManager from "../components/Toast/ToastManager";
import type { ToastItem } from "../components/Toast/props";

type ToastOptions = Omit<ToastItem, "type" | "message">;
type Toast = {
  [key in ToastItem["type"]]: (message: string, options?: ToastOptions) => void;
};

const toast: Toast = {
  info(message: string, options?: ToastOptions) {
    toastManager.add({ type: "info", message, ...options });
  },
  success(message: string, options?: ToastOptions) {
    toastManager.add({ type: "success", message, ...options });
  },
  error(message: string, options?: ToastOptions) {
    toastManager.add({ type: "error", message, ...options });
  },
  warning(message: string, options?: ToastOptions) {
    toastManager.add({ type: "warning", message, ...options });
  },
};

export default toast;
