export const maskingPhoneNum = (number: string) => `${number?.slice(0, 4)}****${number?.slice(8)}`;
