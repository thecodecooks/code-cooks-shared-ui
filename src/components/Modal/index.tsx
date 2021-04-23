import React, {PropsWithChildren, useRef, useEffect, ReactElement} from 'react';
import classNames from 'classnames';
// import Loader from '../Loader';
// import ErrorBox from '../ErrorBox';
import styles from './Modal.module.css';

export type ModalProps = PropsWithChildren<{
  className?: string;
  closeModal: VoidFunction;
  contentClassName?: string;
  error: string;
  hideCloseButton?: boolean;
  loading?: boolean;
  onClose?: VoidFunction;
  open?: boolean;
}>;

export function Modal({
  children,
  className,
  closeModal,
  contentClassName,
  error = '',
  hideCloseButton = false,
  loading = false,
  onClose,
  open = false,
}: ModalProps): ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);
  const cx = classNames(styles.root, className, {
    [styles.open]: open,
  });
  const contentCx = classNames(styles.content, contentClassName);

  function close() {
    closeModal();

    if (onClose) {
      onClose();
    }
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        close();
      }
    }

    function onClickOutside(event: MouseEvent) {
      if (!contentRef.current) return;

      if (!contentRef.current.contains(event.target as Node) && open) {
        close();
      }
    }

    if (open) {
      document.body.classList.add('no-scroll');
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside);

    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClickOutside);
    };
  }, [open]);

  return (
    <div className={cx} role="dialog" aria-modal="true">
      {/* {loading && <Loader full />} */}
      <div className={contentCx} ref={contentRef}>
        {!hideCloseButton && (
          <button onClick={close} className={styles.close} type="button">
            &times;
          </button>
        )}
        <div className={styles.inner}>
          {/* {error && <ErrorBox>{error}</ErrorBox>} */}
          {children}
        </div>
      </div>
    </div>
  );
}
