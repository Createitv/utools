/**
 * @description 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
 * @param {T[]} array 需要处理的数组
 * @param {number} size 每个数组区块的长度
 * @returns {T[][]} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 */
declare function chunk<T>(array: T[], size?: number): T[][];
/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param {(false | "" | 0 | T | null | undefined)[]} array 待处理的数组
 * @returns {T[]} 返回过滤掉假值的新数组
 */
declare function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[];
/**
 * @description 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * @param {T[]} array 要查询的数组。
 * @param {number} n 要去除的元素个数
 * @returns {T[]}
 */
declare function drop<T>(array: T[], n?: number): T[];
/**
 * @description 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 * @param {T[]} array 要查询的数组
 * @param {number} n 要去除的元素个数
 * @returns {T[]} 返回array剩余切片
 */
declare function dropRight<T>(array: T[], n?: number): T[];
/**
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
 * @param {T[]} array 要填充改变的数组
 * @param {T} value 填充给 array 的值
 * @param {0} start 开始位置（默认0）
 * @param {number} end (number):结束位置（默认array.length）
 * @returns {T[]}
 */
declare function fill<T>(array: T[], value: T, start?: number, end?: number): T[];
/**
 * @description 获取数组 array 的第一个元素。
 * @param {T[]} array
 * @returns {T | undefined}
 */
declare function first<T>(array: T[]): T | undefined;
/**
 * @description 获取数组 array 的最后第一个元素。
 * @param {T[]} array
 * @returns {T | undefined}
 */
declare function last<T>(array: T[]): T | undefined;
/**
 * @description 这个方法返回一个由键值对pairs构成的对象。
 * @param {[K, V][]} pairs  键值对pairs
 * @returns {Record<K, V>} 返回一个新对象
 */
declare function fromPairs<K extends PropertyKey, V>(pairs: [K, V][]): Record<K, V>;
/**
 * @description 将 array 中的所有元素转换为由 separator 分隔的字符串。
 * @param {T[]} array
 * @param {string} separator
 * @returns {string}
 */
declare function join<T>(array: T[], separator?: string): string;
/**
 * @description 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 * @param {T[]} array 要查询的数组
 * @param {number} n 要返回元素的索引值
 * @returns {T | undefined} 获取array数组的第n个元素
 */
declare function nth<T>(array: T[], n: number): T | undefined;

declare const cookie: {
    /**
     * 原生 JavaScript 获取 cookie 值
     * @param name
     */
    getCookie(name: string): string | null;
    getAllCookies(): {
        [x: string]: string;
    };
    deleteCookie(name: string, domain?: string, path?: string): void;
    deleteAllCookies(domain: string, path: string): void;
    setCookie(name: string, value: string | number | object | boolean, days?: number, domainStr?: string): void;
};

/**
 * Usage:
 * https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
 * Compatibility: https://caniuse.com/#feat=indexeddb
 */
declare class LocalIndexedDB {
    private _db;
    private _version;
    private _database;
    private _storeName;
    private _openLog;
    /**
     * Constructor a new indexedDB object
     * @param database database name
     * @param version database version
     * @param storeName store object name
     * @param openLog - 是否打印 indexedDB 变化
     */
    constructor(database: string, version: number, storeName: string, openLog?: boolean);
    /**
     * Open the database indicated in constructor function.
     * This method return a Promise object which success will resolve db instance.
     */
    open(): Promise<IDBDatabase>;
    private getObjectStore;
    add(value: any, key?: string): Promise<IDBRequest<any>>;
    /**
     * Set a value to store object by key
     * @param key the key of store object
     * @param value the value of store object
     */
    set(key: string, value: any): Promise<IDBRequest<any>>;
    /**
     * Get the value with the given key
     * @param key the key of store object
     */
    get(key: string): Promise<IDBRequest<any>>;
    /**
     * Delete records in store with the given key
     * @param key the key of store object
     */
    delete(key: string): Promise<IDBRequest<any>>;
    /**
     * Delete all data in store object
     */
    clear(): Promise<IDBRequest<any>>;
    /**
     * Get the store object
     */
    getStore(): IDBObjectStore | null;
    /**
     * Wrap the database request result as promise object
     * @param operate A function which operate store
     */
    wrapStoreOperationPromise<T = IDBRequest>(operate: (store: IDBObjectStore) => IDBRequest): Promise<T>;
    private log;
}

/**
 * 封装 localStorage
 * 增加对 JSON 对象的转换
 * @return {[type]} [description]
 */
declare const localDB: {
    /**
     * 按 key 存贮数据 value 到 localStorage
     * @param {String} key   存贮数据的唯一标识
     * @param {String, Object} value 所要存贮的数据
     */
    set(key: string | number, value: any): void;
    /**
     * 通过 key 从 localStorage 获取数据
     * @param  {String} key  获取数据的唯一标识
     * @return {String, Object}  返回空、字符串或者对象
     */
    get(key: string | number): any;
    /**
     * 通过 key 从 localStorage 删除数据
     * @param  {String} key  删除数据的唯一标识
     */
    remove(key: string | number): void;
    /**
     * 清空 localStorage
     * @return 无返回 NULL
     */
    clear(): void;
};

declare function browserCheck(): boolean;
/**
 * description: 判断是否为手机端
 * @returns {boolean}
 */
declare function isMobileDevice(): boolean;
/**
 * description: 判断是否为 MacOS系统
 * @returns {boolean}
 */
declare function isMacOs(): boolean;
/**
 * description: 判断是否为 Windows 系统
 * @returns {boolean}
 */
declare function isWindows(): boolean;
/**
 * 根据参数名获取URL数据
 * @param  {[type]} name [description]
 * @param  {[type]} url  [description]
 */
declare function getParameterByName(name: string, url?: string): string | null;
/**
 * @description 生成一个时间戳的Key
 * @returns {string}
 */
declare function generateAKey(): string;
/**
 * 随机生成一串6位同时包含数字、大小写字母的字符串
 * @param len number
 */
declare function getRandomStr(len: number): string;
/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
declare function isSupportWebP(): boolean;

/**
 * @description 进制转化函数
 * @param {number} value
 * @returns {string}
 *
 * @example
 * ```
 * // return 1 KB
 * convertBytes(1024)
 * ```
 * @example
 * ```
 * // return 1 MB
 * convertBytes(1024*1024)
 * ```
 * @example
 * ```
 * // return 13.56 GB
 * convertBytes(14562133212)
 * ```
 */
declare function convertBytes(value: number): string;

/**
 * @description: 时间格式化
 */
declare const dateTime: {
    /**
     * 返回 YYYY-MM-DD HH:mm:ss 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatDateTime(timeData: string | number | Date): string;
    /**
     * 返回 YYYY-MM-DD 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatDate(timeData: string | number | Date): string;
    /**
     * 返回 YYYY-MM-DD HH:mm 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatDateHours(timeData: string | number | Date): string;
    /**
     * 返回 MM-DD HH:mm 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatDayHours(timeData: string | number | Date): string;
    /**
     * 返回 HH:mm 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatHours(timeData: string | number | Date): string;
    /**
     * 返回 HH:mm:ss 格式化的字符串
     * @param {string | number | Date} timeData
     * @return {string}
     */
    formatMinute(timeData: string | number | Date): string;
    /**
     * 把秒转换成 HH[h]mm[m]ss[s] 的格式
     * @param {number} secondTime 秒
     * @return {string}
     */
    formatSecond(secondTime?: number): string;
};
/**
 * @description 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
declare function isLeapYear(year: number): boolean;

/**
 * @description 加法运算
 * @param numbers
 * @returns number
 */
declare function add(...numbers: number[]): number;
declare function ceil(n: number, precision?: number): number;
declare function divide(dividend: number, divisor: number): number;
declare function floor(n: number, precision?: number): number;
declare function multiply(multiplier: number, multiplicand: number): number;
/**
 * @description 向最近取整并保留几位
 * @param {number} n
 * @param {number} precision
 * @returns {number}
 */
declare function round(n: number, precision?: number): number;
/**
 * @description 减法运算
 * @param {number} minuend 减数
 * @param {number} subtrahend 被减数
 * @returns {number}
 */
declare function subtract(minuend: number, subtrahend: number): number;

/**
 * @description 尝试调用func，返回结果 或者 捕捉错误对象
 * @param {(...args: any[]) => T} func
 * @param args
 * @returns {Error | T}
 */
declare function attempt<T>(func: (...args: any[]) => T, ...args: any[]): T | Error;

/**
 * @description 创建一个返回 value 的函数
 * @param {T} value 要新函数返回的值
 * @returns {() => T} 返回新的常量函数
 */
declare function constant<T>(value: T): () => T;

/**
 * @description 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数
 * @param {[((value: T) => boolean), ((value: T) => R)][]} pairs 断言函数对。
 * @returns {(value: T) => (R | undefined)} 返回新的复合函数
 */
declare function cond<T, R>(pairs: [(value: T) => boolean, (value: T) => R][]): (value: T) => R | undefined;

/**
 * @description
 * @param {number} n 调用 iteratee 的次数。
 * @param {(index: number) => R} iteratee 每次迭代调用的函数。
 * @returns {R[]}  返回调用结果的数组
 */
declare function times<R>(n: number, iteratee?: (index: number) => R): R[];

/**
 * @description 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者
 *   undefined，那么返回defaultValue默认值。
 * @param {T | null | undefined} value 要检查的值
 * @param {R} defaultValue  默认值
 * @returns {T | R} 返回 resolved 值
 */
declare function defaultTo<T, R>(value: T | null | undefined, defaultValue: R): T | R;

/**
 * @description 这个方法返回首个提供的参数
 * @param {T} value
 * @returns {T}
 */
declare function identity<T>(value: T): T;

/**
 * @description   判断是否为邮箱地址
 * @param  {String} value
 * @return {Boolean}
 */
declare function isEmail(value: string): boolean;
/**
 * @description  判断是否为手机号
 * @param  {String|Number} value
 * @param type 默认 strict 严格模式，非严格模式 中国手机号(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @return {Boolean}
 */
declare function isTelPhoneNum(value: string, type?: string): boolean;
/**
 * @description   判断是否为身份证号
 * @param  {String|Number} value
 * @return {Boolean}
 */
declare function isIdCard(value: string): boolean;
/**
 * @description 判断是否为座机号
 * @param {string} value
 * @returns {boolean}
 */
declare function isLandlineNum(value: string): boolean;
/**
 * @description 判断是否为邮政编码
 * @param {string} value
 * @returns {boolean}
 */
declare function isZipCode(value: string): boolean;
/**
 * @description 判断是否为微信号
 * @param {string} value
 * @returns {boolean}
 */
declare function isWeChat(value: string): boolean;
/**
 * @description 判断是否为QQ号
 * @param {string} value
 * @returns {boolean}
 */
declare function isQQ(value: string): boolean;
/**
 * @description 判断是否为车牌号
 * @param {string} value
 * @returns {boolean}
 */
declare function isLicensePlateNum(value: string): boolean;
/**
 * @description 判断是否为港澳通行证
 * @param {string} value
 * @returns {boolean}
 */
declare function isHongKongAndMacauPass(value: string): boolean;
/**
 * @description 判断是否为合理1-120年龄
 * @param {string} value
 * @returns {boolean}
 */
declare function isAge(value: string): boolean;

/**
 * @description   判断是否为数字
 * @param {string} value
 * @returns {boolean}
 */
declare function isPureNumber(value: string): boolean;
/**
 * @description 判断是否为小数
 * @param {string} value
 * @returns {boolean}
 */
declare function isFloat(value: string): boolean;
/**
 * @description 判断是否为正整数
 * @param {string} value
 * @returns {boolean}
 */
declare function isPositiveInteger(value: string): boolean;
/**
 * @description 判断是否为负整数
 * @param {string} value
 * @returns {boolean}
 */
declare function isNegativeInteger(value: string): boolean;

/**
 * @description 判断是否为纯英文
 * @param {string} value
 * @returns {boolean}
 */
declare function isPureEnglish(value: string): boolean;
/**
 * @description 判断是否为纯小写字母
 * @param {string} value
 * @returns {boolean}
 */
declare function isPureLowerCharacter(value: string): boolean;
/**
 * @description 判断是否为纯大写字母
 * @param {string} value
 * @returns {boolean}
 */
declare function isPureUpperCharacter(value: string): boolean;
/**
 * @description 判断是否为数字和英文
 * @param {string} value
 * @returns {boolean}
 */
declare function isNumberAndEnglish(value: string): boolean;
/**
 * @description 包含中文正则
 * @param {string} value
 * @returns {boolean}
 */
declare function isChinese(value: string): boolean;
/**
 * @description 包含中文和英文
 * @param {string} value
 * @returns {boolean}
 */
declare function isChineseAndEnglish(value: string): boolean;
/**
 * @description 判断是否为中文和数字
 * @param {string} value
 * @returns {boolean}
 */
declare function isChineseAndNumber(value: string): boolean;
/**
 * @description 判断是否为用户名 5-16位，只能包含字母、数字、下划线和减号
 * @param {string} value
 * @returns {boolean}
 */
declare function isUserName(value: string): boolean;

/**
 * @description 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String} value
 * @return {Boolean}
 */
declare function isColor(value: string): boolean;

/**
 * @description   判断是否为URL地址
 * @param  {String} value
 * @return {Boolean}
 */
declare function isUrl(value: string): boolean;
/**
 * @description   判断是否为IPV4地址
 * @param {string} value
 * @returns {boolean}
 */
declare function isIpv4(value: string): boolean;
/**
 * @description   判断是否为IPV6地址
 * @param {string} value
 * @returns {boolean}
 */
declare function isIpv6(value: string): boolean;

/**
 * @description 判断是否为日期时间
 * @param value
 * @returns {boolean}
 */
declare function isValidDataTime(value: any): boolean;

type universal_LocalIndexedDB = LocalIndexedDB;
declare const universal_LocalIndexedDB: typeof LocalIndexedDB;
declare const universal_add: typeof add;
declare const universal_attempt: typeof attempt;
declare const universal_browserCheck: typeof browserCheck;
declare const universal_ceil: typeof ceil;
declare const universal_chunk: typeof chunk;
declare const universal_compact: typeof compact;
declare const universal_cond: typeof cond;
declare const universal_constant: typeof constant;
declare const universal_convertBytes: typeof convertBytes;
declare const universal_cookie: typeof cookie;
declare const universal_dateTime: typeof dateTime;
declare const universal_defaultTo: typeof defaultTo;
declare const universal_divide: typeof divide;
declare const universal_drop: typeof drop;
declare const universal_dropRight: typeof dropRight;
declare const universal_fill: typeof fill;
declare const universal_first: typeof first;
declare const universal_floor: typeof floor;
declare const universal_fromPairs: typeof fromPairs;
declare const universal_generateAKey: typeof generateAKey;
declare const universal_getParameterByName: typeof getParameterByName;
declare const universal_getRandomStr: typeof getRandomStr;
declare const universal_identity: typeof identity;
declare const universal_isAge: typeof isAge;
declare const universal_isChinese: typeof isChinese;
declare const universal_isChineseAndEnglish: typeof isChineseAndEnglish;
declare const universal_isChineseAndNumber: typeof isChineseAndNumber;
declare const universal_isColor: typeof isColor;
declare const universal_isEmail: typeof isEmail;
declare const universal_isFloat: typeof isFloat;
declare const universal_isHongKongAndMacauPass: typeof isHongKongAndMacauPass;
declare const universal_isIdCard: typeof isIdCard;
declare const universal_isIpv4: typeof isIpv4;
declare const universal_isIpv6: typeof isIpv6;
declare const universal_isLandlineNum: typeof isLandlineNum;
declare const universal_isLeapYear: typeof isLeapYear;
declare const universal_isLicensePlateNum: typeof isLicensePlateNum;
declare const universal_isMacOs: typeof isMacOs;
declare const universal_isMobileDevice: typeof isMobileDevice;
declare const universal_isNegativeInteger: typeof isNegativeInteger;
declare const universal_isNumberAndEnglish: typeof isNumberAndEnglish;
declare const universal_isPositiveInteger: typeof isPositiveInteger;
declare const universal_isPureEnglish: typeof isPureEnglish;
declare const universal_isPureLowerCharacter: typeof isPureLowerCharacter;
declare const universal_isPureNumber: typeof isPureNumber;
declare const universal_isPureUpperCharacter: typeof isPureUpperCharacter;
declare const universal_isQQ: typeof isQQ;
declare const universal_isSupportWebP: typeof isSupportWebP;
declare const universal_isTelPhoneNum: typeof isTelPhoneNum;
declare const universal_isUrl: typeof isUrl;
declare const universal_isUserName: typeof isUserName;
declare const universal_isValidDataTime: typeof isValidDataTime;
declare const universal_isWeChat: typeof isWeChat;
declare const universal_isWindows: typeof isWindows;
declare const universal_isZipCode: typeof isZipCode;
declare const universal_join: typeof join;
declare const universal_last: typeof last;
declare const universal_localDB: typeof localDB;
declare const universal_multiply: typeof multiply;
declare const universal_nth: typeof nth;
declare const universal_round: typeof round;
declare const universal_subtract: typeof subtract;
declare const universal_times: typeof times;
declare namespace universal {
  export {
    universal_LocalIndexedDB as LocalIndexedDB,
    universal_add as add,
    universal_attempt as attempt,
    universal_browserCheck as browserCheck,
    universal_ceil as ceil,
    universal_chunk as chunk,
    universal_compact as compact,
    universal_cond as cond,
    universal_constant as constant,
    universal_convertBytes as convertBytes,
    universal_cookie as cookie,
    universal_dateTime as dateTime,
    dateTime as default,
    universal_defaultTo as defaultTo,
    universal_divide as divide,
    universal_drop as drop,
    universal_dropRight as dropRight,
    universal_fill as fill,
    universal_first as first,
    universal_floor as floor,
    universal_fromPairs as fromPairs,
    universal_generateAKey as generateAKey,
    universal_getParameterByName as getParameterByName,
    universal_getRandomStr as getRandomStr,
    first as head,
    universal_identity as identity,
    universal_isAge as isAge,
    universal_isChinese as isChinese,
    universal_isChineseAndEnglish as isChineseAndEnglish,
    universal_isChineseAndNumber as isChineseAndNumber,
    universal_isColor as isColor,
    universal_isEmail as isEmail,
    universal_isFloat as isFloat,
    universal_isHongKongAndMacauPass as isHongKongAndMacauPass,
    universal_isIdCard as isIdCard,
    universal_isIpv4 as isIpv4,
    universal_isIpv6 as isIpv6,
    universal_isLandlineNum as isLandlineNum,
    universal_isLeapYear as isLeapYear,
    universal_isLicensePlateNum as isLicensePlateNum,
    universal_isMacOs as isMacOs,
    universal_isMobileDevice as isMobileDevice,
    universal_isNegativeInteger as isNegativeInteger,
    universal_isNumberAndEnglish as isNumberAndEnglish,
    universal_isPositiveInteger as isPositiveInteger,
    universal_isPureEnglish as isPureEnglish,
    universal_isPureLowerCharacter as isPureLowerCharacter,
    universal_isPureNumber as isPureNumber,
    universal_isPureUpperCharacter as isPureUpperCharacter,
    universal_isQQ as isQQ,
    universal_isSupportWebP as isSupportWebP,
    universal_isTelPhoneNum as isTelPhoneNum,
    universal_isUrl as isUrl,
    universal_isUserName as isUserName,
    universal_isValidDataTime as isValidDataTime,
    universal_isWeChat as isWeChat,
    universal_isWindows as isWindows,
    universal_isZipCode as isZipCode,
    universal_join as join,
    universal_last as last,
    universal_localDB as localDB,
    universal_multiply as multiply,
    universal_nth as nth,
    universal_round as round,
    universal_subtract as subtract,
    last as tail,
    universal_times as times,
  };
}

export { LocalIndexedDB, add, attempt, browserCheck, ceil, chunk, compact, cond, constant, convertBytes, cookie, dateTime, universal as default, defaultTo, divide, drop, dropRight, fill, first, floor, fromPairs, generateAKey, getParameterByName, getRandomStr, first as head, identity, isAge, isChinese, isChineseAndEnglish, isChineseAndNumber, isColor, isEmail, isFloat, isHongKongAndMacauPass, isIdCard, isIpv4, isIpv6, isLandlineNum, isLeapYear, isLicensePlateNum, isMacOs, isMobileDevice, isNegativeInteger, isNumberAndEnglish, isPositiveInteger, isPureEnglish, isPureLowerCharacter, isPureNumber, isPureUpperCharacter, isQQ, isSupportWebP, isTelPhoneNum, isUrl, isUserName, isValidDataTime, isWeChat, isWindows, isZipCode, join, last, localDB, multiply, nth, round, subtract, last as tail, times, universal as u };
