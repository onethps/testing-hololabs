import React, { HTMLAttributes } from 'react';

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open: boolean;
}
