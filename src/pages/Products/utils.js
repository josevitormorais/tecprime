/* eslint-disable no-restricted-globals */
export const getCategoryId = () => {
  return location.pathname.split("/")[2];
};
