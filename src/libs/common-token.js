/**
 * 票据
 * @returns {{get: (function()), refresh: (function()), valid: (function())}}
 * @constructor
 */
export const Token = () => {
  return {
    get: () => {},
    refresh: () => {},
    valid: () => {}
  }
}
