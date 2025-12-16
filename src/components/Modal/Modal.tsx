import type { ReactNode } from "react";
import css from "./Modal.module.css";

function Modal(children: ReactNode) {
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>{children}</div>
    </div>
  );
}

export default Modal;
