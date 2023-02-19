import {
  isAge, isColor, isEmail, isHongKongAndMacauPass, isIdCard, isLandlineNum,
  isLicensePlateNum, isPositiveInteger, isQQ, isTelPhoneNum, isValidDataTime,
  isWeChat, isZipCode
} from "@utools/universal";

console.log(isTelPhoneNum("12345678901")); // false
console.log(isTelPhoneNum("18171123123")); // true
console.log(isIdCard("370629196412072622")); // true
console.log(isIdCard("430822197406220016")); // true
console.log(isIdCard("43082219740622001x")); // true
console.log(isPositiveInteger("12345678901")); // true
console.log(isPositiveInteger("-12345678901")); // false

console.log(isColor("#fff")); // true
console.log(isColor("rgba(255,255,200)")); // false
console.log(isColor("rgba(255,255,200,1)")); // true

console.log(isValidDataTime(("2019-10-100"))); // false
console.log(isValidDataTime(("2019-10-10"))); // true
console.log(isValidDataTime(("2019-02-28"))); // true
console.log(isValidDataTime(("2019-02-29"))); // false

console.log(isEmail("q23@gmail.com")); //true
console.log(isEmail("q23gmail.com")); //false
console.log(isEmail("q23gm@ail.com")); //true
console.log(isEmail("q23gm@163.com")); //true

console.log(isLandlineNum("0755-12345678")); //true
console.log(isLandlineNum("0345-12345678")); // true
console.log(isLandlineNum("x755-12345678")); // false

console.log(isZipCode("123456")); // true
console.log(isZipCode("12345")); // false
console.log(isZipCode("832901")); // true

console.log(isWeChat("123456")); // false
console.log(isWeChat("12345")); // false
console.log(isWeChat("navalism1")); // true
console.log(isWeChat("cooo1")); // false

console.log(isQQ("123456")); // true
console.log(isQQ("q213131")); // false
console.log(isQQ("9992088890")); // true

console.log(isLicensePlateNum("粤B12345")); // true
console.log(isLicensePlateNum("粤B1234")); // false
console.log(isLicensePlateNum("粤B123456")); // false
console.log(isLicensePlateNum("粤B1234A")); // true

console.log(isHongKongAndMacauPass("C12345678")); // true
console.log(isHongKongAndMacauPass("W123456")); // false

console.log(isAge("12")); // true
console.log(isAge("0")); // false
console.log(isAge("121")); // false
