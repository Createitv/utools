# 通用正则匹配

### 判断是否为16进制颜色，rgb 或 rgba
```typescript
import { isColor } from '@utools/universal'

console.log(isColor("#fff")); // true
console.log(isColor("rgba(255,255,200)")); // false
console.log(isColor("rgba(255,255,200,1)")); // true
```

### 判断是否为正确的年月日
```typescript
import { isValidDataTime } from '@utools/universal'

console.log(isValidDataTime(('2019-10-100'))) // false
console.log(isValidDataTime(('2019-10-10'))) // true
console.log(isValidDataTime(('2019-02-28'))) // true
console.log(isValidDataTime(('2019-02-29'))) // false
```

### 判断是否为邮箱地址
```typescript
import { isEmail } from '@utools/universal'

console.log(isEmail('q23@gmail.com')); //true
console.log(isEmail('q23gmail.com')); //false
console.log(isEmail('q23gm@ail.com')); //true
console.log(isEmail('q23gm@163.com')); //true
```

### 判断是否为手机号码
```typescript
import { isTelPhoneNum } from '@utools/universal'

console.log(isTelPhoneNum("12345678901")); // false
console.log(isTelPhoneNum("18171123123")); // true
```

### 判断是否为身份证号
```typescript
import { isIdCard } from '@utools/universal'

console.log(isIdCard("430822197406220016")); // true
console.log(isIdCard("43082219740622001x")); // true
```

### 判断是否为座机号
```typescript
import { isLandlineNum } from '@utools/universal'

console.log(isLandlineNum("0755-12345678")); //true
console.log(isLandlineNum("0345-12345678")); // true
console.log(isLandlineNum("x755-12345678")); // false
```

### 判断是否为邮政编码
```typescript
import { isZipCode } from '@utools/universal'

console.log(isZipCode("123456")); // true
console.log(isZipCode("12345")); // false
console.log(isZipCode("832901")); // true
```

### 判断是否为合法微信号
```typescript
import { isWeChat } from '@utools/universal'

console.log(isWeChat("123456")); // false
console.log(isWeChat("12345")); // false
console.log(isWeChat("navalism1")); // true
console.log(isWeChat("cooo1")); // false
```

### 判断是否为QQ号
```typescript
import { isQQ } from '@utools/universal'


console.log(isQQ("123456")); // true
console.log(isQQ("q213131")); // false
console.log(isQQ("9992088890")); // true
```

### 判断是否为车牌号
```typescript
import { isLicensePlateNum } from '@utools/universal'

console.log(isLicensePlateNum("粤B12345")); // true
console.log(isLicensePlateNum("粤B1234")); // false
console.log(isLicensePlateNum("粤B123456")); // false
console.log(isLicensePlateNum("粤B1234A")); // true
```

### 判断是否为港澳通行证

```typescript
import { isHongKongAndMacauPass } from '@utools/universal'

console.log(isHongKongAndMacauPass("E1234567")); // true
console.log(isHongKongAndMacauPass("E123456")); // false
```

### 判断是否为合理1-120之间的合法年龄
```typescript
import { isAge } from '@utools/universal'

console.log(isAge("12")); // true
console.log(isAge("0")); // false
console.log(isAge("121")); // false
```
