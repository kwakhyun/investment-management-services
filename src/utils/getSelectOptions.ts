export const getSelectOptions = (obj: Record<string, string>, firstOption?: string) => {
  const options = Object.entries(obj);
  if (firstOption) options.unshift(['all', firstOption]);

  return options;
};
