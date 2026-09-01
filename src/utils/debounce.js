// 防抖（返回闭包函数，避免全局变量污染）
export default function debounce(func, wait = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), wait);
  };
}
