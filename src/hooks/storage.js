import { useState, useEffect } from "react";

const STORAGE_KEY = "words";

function useStorage(input) {
  const [words, setItems] = useState(input); /* 副作用を使う */
  useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEY);
 
    if (!data) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);
  const setWords = (words) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
    setItems(words);
  };

  return [words, setWords];
}

export default useStorage;
