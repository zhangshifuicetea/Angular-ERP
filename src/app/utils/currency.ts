// 转化RMB字符串
export function transformYuan(value: any, digits: number = 2): string {
  if (typeof  value === 'number') {
    value = value.toFixed(digits);
  }
  return `&yen ${value}`;
}
