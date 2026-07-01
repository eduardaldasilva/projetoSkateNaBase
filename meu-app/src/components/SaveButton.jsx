import { useState } from "react";

export function SaveButton({ onClick, children }) { 
  const [open, setOpen] = useState(false);
  
  const handleClick = (evento) => {
    setOpen(!open);
    if (onClick) {
      onClick(evento);
    }
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}