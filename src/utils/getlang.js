import {
  cn
} from '@/lang/zh-cn.js'
import {
  en
} from '@/lang/zh-en.js'
import {
  tw
} from '@/lang/zh-tw.js'
import {
  kr
} from '@/lang/ko-kr.js'
import {
  jp
} from '@/lang/js-jp.js'
export const getlang = function () {
  try {
    const res = wx.getSystemInfoSync()
    if (res.language == "zh_CN" || res.language == "zh" || res.language == "zh_cn") {
      return cn
    } else if (res.language == "zh_HK" || res.language == "zh_hk" || res.language == "zh_TW" || res.language == "zh_tw") {
      return tw
    } else if (res.language == "en") {
      return en
    } else if (res.language == "ja") {
      return jp
    } else if (res.language == "ko") {
      return kr
    } else {
      return cn
    }
  } catch (e) {}
}
export const getlanguage = function () {
  try {
    const res = wx.getSystemInfoSync()
    if (res.language == "zh_CN" || res.language == "zh" || res.language == "zh_cn") {
      return "zh_cn"
    } else if (res.language == "zh_HK" || res.language == "zh_hk" || res.language == "zh_TW" || res.language == "zh_tw") {
      return "zh-tw"
    } else if (res.language == "en") {
      return "en-us"
    } else if (res.language == "ja") {
      return "ja-jp"
    } else if (res.language == "ko") {
      return "ko-kr"
    } else {
      return "en-us"
    }
  } catch (e) {}
}
