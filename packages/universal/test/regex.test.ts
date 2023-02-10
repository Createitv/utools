import {
  isColor,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
} from 'src/regexp/regexp'

describe('Regexp API:', function () {
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

  describe('#isPhoneNum()', function () {
    it('isPhoneNum("18882324234") should return true ', function () {
      expect(isPhoneNum('18882324234')).toBeTruthy()
    })
    it('isPhoneNum("8618882324234") should return true ', function () {
      expect(isPhoneNum('8618882324234')).toBeTruthy()
    })
    it('isPhoneNum("5534553") should return false', function () {
      expect(!isPhoneNum('5534553')).toBeTruthy()
    })
    it('isPhoneNum("19056323241") should return true', function () {
      expect(isPhoneNum('19056323241')).toBeTruthy()
    })
  })

  describe('#isUrl()', function () {
    it('isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
      expect(
        isUrl('https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'),
      ).toBeTruthy()
    })
    it('isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
      expect(
        isUrl('http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'),
      ).toBeTruthy()
    })
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
