import React, {PropsWithChildren, useRef, useEffect, ReactElement} from 'react';
import classNames from 'classnames';
import styles from './Modal.module.css';

export type ModalProps = PropsWithChildren<{
  className?: string;
  closeModal: VoidFunction;
  contentClassName?: string;
  error: string;
  hideCloseButton?: boolean;
  open?: boolean;
}>;

export function Modal({
  children,
  className,
  closeModal,
  contentClassName,
  error = '',
  hideCloseButton = false,
  open = false,
}: ModalProps): ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentCx = classNames(styles.content, contentClassName);
  const cx = classNames(styles.root, className, {
    [styles.open]: open,
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    function onClickOutside(event: MouseEvent) {
      if (!contentRef.current) return;

      if (!contentRef.current.contains(event.target as Node) && open) {
        closeModal();
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
      <div className={contentCx} ref={contentRef}>
        {!hideCloseButton && (
          <button onClick={closeModal} className={styles.close} type="button">
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
