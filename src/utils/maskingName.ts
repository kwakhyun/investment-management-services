export const maskingName = (name: string) => {
  const nameArr = name?.split('') || [];
  let parsedName = '';
  nameArr.forEach((n, i) => {
    if (i === 0 || (i === nameArr.length - 1 && i !== 1) || n === ' ') parsedName += n;
    else parsedName += '*';
  });
  return parsedName;
};
