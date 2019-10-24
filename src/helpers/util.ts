export function isDate(val: any): val is Date { // 类型保护
  return Object.prototype.toString.call(val) === '[object Date]';
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object';
}
