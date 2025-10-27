import React, {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface CollapseProps {
  button: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
  children: ReactNode;
  defaultState?: boolean;
}

function Collapse({ button, children, defaultState = false }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(defaultState);
  const [height, setHeight] = useState(0);

  // Измеряем высоту содержимого
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const observer = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });

    observer.observe(el);
    setHeight(el.scrollHeight);

    return () => observer.disconnect();
  }, []);

  // Навешиваем на кнопку onClick
  const clonedButton = React.cloneElement(button, {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      button.props.onClick?.(e);
      setIsOpen((prev) => !prev);
    },
  });

  return (
    <div className="relative">
      {clonedButton}
      <div
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden duration-300"
      >
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
