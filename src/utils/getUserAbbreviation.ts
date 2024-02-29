export const getUserAbbreviation = (name: string): string => {
  const abbreviation = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return abbreviation;
};
