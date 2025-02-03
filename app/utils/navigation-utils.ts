export const getSearchParam = (key: string): string | null => {
  const urlSearchParams = new URLSearchParams(window.location?.search);
  return urlSearchParams.get(key);
};

export const setSearchParam = (key: string, value: string): void => {
  const urlSearchParams = new URLSearchParams(window.location?.search);
  urlSearchParams.set(key, value);
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlSearchParams}`
  );
};
