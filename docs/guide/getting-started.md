# 如何使用

## 安装
```bash
npm i @utools/universal 
yarn add @utools/universal
pnpm add @utools/universal
```

## 快速上手
```ts
import { isIdCard, isPositiveInteger, isTelPhoneNum } from "@utools/universal"
import u from "@utools/universal"; //默认导出对象为 u

console.log(u.head([1, 2, 3, 4, 5])); // 1));
console.log(u.nth([1, 2, 3, 4, 5], 2)); // 3));

console.log(isTelPhoneNum("12345678901")); // false
console.log(isTelPhoneNum("18871535971")); // true
console.log(isIdCard("370629196412072622")); // true
console.log(isIdCard("430822197406220016")); // true
console.log(isPositiveInteger("12345678901")); // true
console.log(isPositiveInteger("-12345678901")); // false
```
