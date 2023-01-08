import React from 'react';

import styles from './Collapse.module.scss';
import { CollapseProps } from './Collapse.Props';

export const Collapse: React.FC<CollapseProps> = ({
  children,
  open,
  className,
  ...props
}) => {
  const [setHeight, setHeightState] = React.useState<string>('0px');

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      setHeightState(!open ? '0px' : `${ref.current.scrollHeight}px`);
    }
  }, [open]);

  return (
    <div
      {...props}
      ref={ref}
      style={{ maxHeight: `${setHeight}` }}
      className={`${styles.root} ${className} `}
    >
      <div>{children}</div>
    </div>
  );
};
