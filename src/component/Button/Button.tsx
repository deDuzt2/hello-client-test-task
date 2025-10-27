import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps;

const commonClass = "p-[10px]";

export function Button({ children, className, ...props }: ButtonProps) {
  const currentClass = `${commonClass} ${className}`;
  return (
    <button className={currentClass} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  to,
  ...props
}: ButtonLinkProps) {
  const currentClass = `${commonClass} ${className}`;
  return (
    <Link to={to} className={currentClass} {...props}>
      {children}
    </Link>
  );
}
