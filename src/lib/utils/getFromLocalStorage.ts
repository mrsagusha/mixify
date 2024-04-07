const getFromLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export { getFromLocalStorage };
