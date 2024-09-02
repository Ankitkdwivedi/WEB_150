import React, { useRef } from 'react';
export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
          console.log(inputRef.current.focus());
          console.log(inputRef.current);
          console.log(inputRef);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

