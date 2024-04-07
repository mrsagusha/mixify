const setToLocalStorage = (key: string, value: string): void => {
  window.localStorage.setItem(key, value);
};

export { setToLocalStorage };
