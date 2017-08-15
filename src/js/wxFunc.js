/**
 * Created by txl-pc on 2017/8/15.
 */
export const loadWx = () => {
  return new Promise(function (resolve, reject) {
    if (window.wx !== undefined) {
      console.log("微信sdk 不能重复加载");
      resolve(window.wx)
      return;
    }
    else {
      console.log("微信sdk 不存在，重新加载")
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js';
      script.onerror = reject;
      script.onload = function () {
        setTimeout(function () {
          resolve(window.wx)
        }, 2 * 1000)
      }
      document.head.appendChild(script);
    }
  })
}

export const wxConfig = () => {
  wx.config({
    debug: true,
    appId: 'wxf8b4f85f3a794e77',
    timestamp: 1502809219,
    nonceStr: 'ceq5lnVsqVc1sXTD',
    signature: '1a47973b03893248e5e02b82b6ea3422eb1bb32a',
    jsApiList: [
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'translateVoice',
      'startRecord',
      'stopRecord',
      'onVoiceRecordEnd',
      'playVoice',
      'onVoicePlayEnd',
      'pauseVoice',
      'stopVoice',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ]
  })
}

export const wxReady = () => {
  wx.ready(function () {

  })
}

export const wxError = () => {
  wx.error(function (res) {
    console.log(res)
  })
}
