/* eslint-disable no-useless-escape */
export const nameValidate =
  /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
export const phoneValidate =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
