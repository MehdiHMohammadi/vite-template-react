import { useState, useEffect } from "react";

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem("search") || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useStorageState;
