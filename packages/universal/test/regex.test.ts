import { describe } from '@jest/globals'
import {
  isColor,
  isValidDataTime,
  isEmail,
  isIdCard,
  isTelPhoneNum,
  isUrl,
  isIpv4,
  isIpv6,
} from '@utools/universal'

describe('regexp', () => {
  describe('Regexp r-color API:', function () {
    describe('#isColor()', function () {
      it('isColor("#acf") should return true ', function () {
        expect(isColor('#acf')).toBe(true)
      })
      it('isColor("#aaccff") should return true ', function () {
        expect(isColor('#aaccff')).toBeTruthy()
      })
      it('isColor("acf") should return false ', function () {
        expect(!isColor('acf')).toBeTruthy()
      })
      it('isColor("aaccff") should return false ', function () {
        expect(!isColor('aaccff')).toBeTruthy()
      })
      it('isColor("rgb(0,0,0,1)") should return false ', function () {
        expect(!isColor('rgb(0,0,0,1)')).toBeTruthy()
      })
      it('isColor("rgb(0,0,0,)") should return false ', function () {
        expect(!isColor('rgb(0,0,0,)')).toBeTruthy()
      })
      it('isColor("rgb(255,255,256)") should return false ', function () {
        expect(!isColor('rgb(255,255,256)')).toBeTruthy()
      })
      it('isColor("rgb(255,256,255)") should return false ', function () {
        expect(!isColor('rgb(255,256,255)')).toBeTruthy()
      })
      it('isColor("rgb(256,255,255)") should return false ', function () {
        expect(!isColor('rgb(256,255,255)')).toBeTruthy()
      })
      it('isColor("rgb(1,1,-1)") should return false ', function () {
        expect(!isColor('rgb(1,1,-1)')).toBeTruthy()
      })
      it('isColor("rgb(1,-1,1)") should return false ', function () {
        expect(!isColor('rgb(1,-1,1)')).toBeTruthy()
      })
      it('isColor("rgb(-1,1,1)") should return false ', function () {
        expect(!isColor('rgb(-1,1,1)')).toBeTruthy()
      })
      it('isColor("rgb(1,1,1.1)") should return false ', function () {
        expect(!isColor('rgb(1,1,1.1)')).toBeTruthy()
      })
      it('isColor("rgb(1,1.1,1)") should return false ', function () {
        expect(!isColor('rgb(1,1.1,1)')).toBeTruthy()
      })
      it('isColor("rgb(1.1,1,1)") should return false ', function () {
        expect(!isColor('rgb(1.1,1,1)')).toBeTruthy()
      })
      it('isColor("rgb(0,0,0)") should return true ', function () {
        expect(isColor('rgb(0,0,0)')).toBeTruthy()
      })
      it('isColor("rgb(255,255,255)") should return true ', function () {
        expect(isColor('rgb(255,255,255)')).toBeTruthy()
      })
      it('isColor("rgba(-1,0,0,1)") should return false ', function () {
        expect(!isColor('rgba(-1,0,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,-1,0,1)") should return false ', function () {
        expect(!isColor('rgba(0,-1,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,-1,1)") should return false ', function () {
        expect(!isColor('rgba(0,0,-1,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,-1)") should return false ', function () {
        expect(!isColor('rgba(0,0,0,-1)')).toBeTruthy()
      })
      it('isColor("rgba(256,0,0,1)") should return false ', function () {
        expect(!isColor('rgba(256,0,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,256,0,1)") should return false ', function () {
        expect(!isColor('rgba(0,256,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,256,1)") should return false ', function () {
        expect(!isColor('rgba(0,0,256,1)')).toBeTruthy()
      })
      it('isColor("rgba(-1,0,0,1)") should return false ', function () {
        expect(!isColor('rgba(-1,0,0,1)'))
      })
      it('isColor("rgba(0,-1,0,1)") should return false ', function () {
        expect(!isColor('rgba(0,-1,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,-1,1)") should return false ', function () {
        expect(!isColor('rgba(0,0,-1,1)')).toBeTruthy()
      })
      it('isColor("rgba(1.1,0,0,1)") should return false ', function () {
        expect(!isColor('rgba(1.1,0,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,1.1,0,1)") should return false ', function () {
        expect(!isColor('rgba(0,1.1,0,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,1.1,1)") should return false ', function () {
        expect(!isColor('rgba(0,0,1.1,1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,256)") should return false ', function () {
        expect(!isColor('rgba(0,0,0,256)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,1.1)") should return false ', function () {
        expect(!isColor('rgba(0,0,0,1.1)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,0.222)") should return false ', function () {
        expect(isColor('rgba(0,0,0,0.222)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,)") should return false ', function () {
        expect(!isColor('rgba(0,0,0,)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0)") should return false ', function () {
        expect(!isColor('rgba(0,0,0)')).toBeTruthy()
      })
      it('isColor("rgba(0,0,0,0.2)") should return false ', function () {
        expect(isColor('rgba(0,0,0,0.2)')).toBeTruthy()
      })
      it('isColor("rgba(24,0,0,.2)") should return false ', function () {
        expect(isColor('rgba(24,0,0,0.2)')).toBeTruthy()
      })
    })
  })

  describe('Regexp r-form API', function () {
    describe('#isEmail()', function () {
      it('isEmail("leiquanlive.com") should return false ', function () {
        expect(!isEmail('leiquanlive.com')).toBeTruthy()
      })
      it('isEmail("leiquan@live.com") should return true ', function () {
        expect(isEmail('leiquan@live.com')).toBe(true)
      })
    })

    describe('#isIdCard()', function () {
      it('isIdCard("622224188203234033") should return true ', function () {
        expect(isIdCard('622224188203234033')).toBeTruthy()
      })
      it('isIdCard("zas224188203234033") should return false', function () {
        expect(!isIdCard('leiquan@live.com')).toBeTruthy()
      })
    })

    describe('#isTelPhoneNum()', function () {
      it('isTelPhoneNum("18882324234") should return true ', function () {
        expect(isTelPhoneNum('18882324234')).toBeTruthy()
      })
      it('isTelPhoneNum("8618882324234") should return true ', function () {
        expect(isTelPhoneNum('8618882324234')).toBeFalsy()
      })
      it('isTelPhoneNum("5534553") should return false', function () {
        expect(!isTelPhoneNum('5534553')).toBeTruthy()
      })
      it('isTelPhoneNum("19056323241") should return true', function () {
        expect(isTelPhoneNum('19056323241')).toBeTruthy()
      })
    })
  })

  describe('Regexp r-http API:', function () {
    describe('#isUrl()', function () {
      it('isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
        expect(
          isUrl('https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'),
        ).toBeTruthy()
      })
      it(
        'isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should' +
          ' return true ',
        function () {
          expect(
            isUrl('https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'),
          ).toBeTruthy()
        },
      )
      it('isUrl("www.baidu.com") should return true', function () {
        expect(isUrl('www.baidu.com')).toBeTruthy()
      })
      it('isUrl("baidu.com") should return true', function () {
        expect(isUrl('baidu.com')).toBeTruthy()
      })
      it('isUrl("http://baiducom") should return false', function () {
        expect(!isUrl('http://baiducom')).toBeTruthy()
      })
    })
  })

  describe('#isIpv4()', function () {
    it('isIpv4(xxx) should return true', function () {
      expect(isIpv4('172.16.0.0')).toBeTruthy()
      expect(isIpv4('169.254.0.0')).toBeTruthy()
      expect(isIpv4('192.88.99.0')).toBeTruthy()
      expect(isIpv4('224.0.0.0')).toBeTruthy()
      expect(isIpv4('240.0.0.0')).toBeTruthy()
      expect(isIpv4('255.255.255.255')).toBeTruthy()
    })

    it('isIpv4(xxx) should return false', function () {
      expect(isIpv4('111.56.045.78')).toBeFalsy()
      expect(isIpv4('221.34.7.8.20 ')).toBeFalsy()
      expect(isIpv4('75.45.301.14')).toBeFalsy()
      expect(isIpv4('11100010.23.14.67')).toBeFalsy()
      expect(isIpv4('240.001.0.0')).toBeFalsy()
      expect(isIpv4('256.255.255.255')).toBeFalsy()
    })
  })

  describe('#isIpv6()', function () {
    it('isIpv6(xxx) should return true', function () {
      expect(isIpv6('1050:0000:0000:0000:0005:0600:300c:326b')).toBeTruthy()
      expect(isIpv6('2001:db8:2de:000:000:000:000:e131')).toBeTruthy()
      expect(isIpv6('2001:0000:0000:25de:0000:0000:0000:cade')).toBeTruthy()
      expect(isIpv6('2001:db8:2de:00:00:00:00:e13')).toBeTruthy()
      expect(isIpv6('2001:0db8:0000:0000:0000:0000:1428:57ab')).toBeTruthy()
    })
  })

  describe('#isIpv6()', function () {
    it('isIpv6(xxx) should return false', function () {
      expect(isIpv6('10h0:0000:0000:0000:0005:0600:300c:326b')).toBeFalsy()
      expect(isIpv6('2001:db8:2de:000:I000:000:000:e131')).toBeFalsy()
      expect(isIpv6('2001:0000:P000:25de:0000:0000:0000:cade')).toBeFalsy()
      expect(isIpv6('2001:db8:2de:00:8T0:00:00:e13')).toBeFalsy()
      expect(isIpv6('2001:0db8:00O0:0000:0000:0000:1428:57ab')).toBeFalsy()
    })
  })
})

describe('Regexp r-date API', function () {
  describe('#isDate()', function () {
    it('isValidDataTime("2019-01-01") should return true ', function () {
      expect(isValidDataTime('2019-01-01')).toBeTruthy()
    })

    it('isValidDataTime("2019-01-01") should return true ', function () {
      expect(isValidDataTime('2019-01-01')).toBeTruthy()
    })

    it('isValidDataTime("2019-01-32") should return true ', function () {
      expect(isValidDataTime('2019-01-32')).toBeFalsy()
      expect(isValidDataTime('2019-02-29')).toBeFalsy()
    })

    it('isValidDataTime("2019-10-100") should return true ', function () {
      expect(isValidDataTime('2019-10-100')).toBeFalsy()
    })
  })
})
