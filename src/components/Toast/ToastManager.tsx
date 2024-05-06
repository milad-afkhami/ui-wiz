import { createRoot } from "react-dom/client";
import { Div } from "style-wiz";
import Toast from "./index";
import type { ToastItem } from "./props";
import type { Nullable } from "ts-wiz";

class ToastManager {
  #toasts: ToastItem[] = [];

  readonly #root: Nullable<ReturnType<typeof createRoot>> = null;

  #timeouts: Record<string, ReturnType<typeof setTimeout>> = {};

  constructor() {
    if (typeof document === "undefined") return;
    this.#root = createRoot(this.createToastContainer());
    this.renderToastContainer();
  }

  private createToastContainer(): HTMLDivElement {
    let container = document.getElementById(
      "toast-container"
    ) as HTMLDivElement | null;

    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    return container;
  }

  add(options: ToastItem) {
    const {
      duration = 3000,
      id = (Math.random() * 10 ** 7).toFixed(),
      hasCloseButton,
    } = options;
    const handleCloseObject = hasCloseButton
      ? { handleClose: () => this.remove(id) }
      : {};
    const toast: ToastItem = { id, ...options, ...handleCloseObject };

    this.#toasts.push(toast);
    this.renderToastContainer();

    if (duration !== "infinity") {
      this.#timeouts[id] = setTimeout(() => {
        this.remove(id);
      }, duration);
    }

    return id;
  }

  remove(id: string) {
    this.#toasts = this.#toasts.filter((toast) => toast.id !== id);
    if (this.#timeouts[id]) {
      clearTimeout(this.#timeouts[id]);
      delete this.#timeouts[id];
    }
    this.renderToastContainer();
  }

  private renderToastContainer() {
    if (this.#root) {
      this.#root.render(
        <Div
          position="fixed"
          flex={[, , "column-reverse"]}
          gap="2"
          dimensions={{
            top: "var(--spacing-4)",
            right: "var(--spacing-4)",
          }}
          zIndex={1000}
        >
          {this.#toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </Div>
      );
    }
  }
}

const toastManager = new ToastManager();

export default toastManager;
