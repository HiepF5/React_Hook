import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('render' + count)
  function handleClick() {
    setCount(count + 1);
    setCount((count) => (count + 1));
    setCount((count) => (count + 1));
    setCount((count) => (count + 1));
    setCount((count) => (count + 1));
    console.log('click5 : '+ count)
    
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}
