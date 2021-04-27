export const anyEmpty = (...args) => {
  return (
    args.filter((string) => {
      return string.trim().length === 0;
    }).length > 0
  );
};
