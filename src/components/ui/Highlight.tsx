import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export const Highlight = ({ children, className = "" }: HighlightProps) => {
  return (
    <span className={`bg-highlight px-1 ${className}`}>
      {children}
    </span>
  );
};
