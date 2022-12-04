const getQueryString = (query: Record<string, unknown>, converter?: (key: string) => string) =>
  Object.entries(query)
    .filter(([, value]) => value && value !== 'all')
    .map(([key, value]) => `${converter ? converter(key) : key}=${value}`)
    .join('&');

export default getQueryString;
