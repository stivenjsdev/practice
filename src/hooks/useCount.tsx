import React, { useEffect, useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputValue(count);
  }, [count]);

  function selectAll(e: React.MouseEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement;
    input.select();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    setInputValue(value);
  }

  function handleSetCounter() {
    setCount(inputValue);
  }

  return {
    count,
    setCount,
    selectAll,
    inputValue,
    handleChange,
    handleSetCounter,
  };
}
