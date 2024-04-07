const removeFromLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};

export { removeFromLocalStorage };
