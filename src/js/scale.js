/**
 * Created by txl-pc on 2017/5/22.
 */
let devicePixelRatio = window.devicePixelRatio;
let scale = 1/ devicePixelRatio
const metaEl = document.createElement('meta')
const head = document.querySelector('head')
const title = head.querySelector('title')
const u = window.navigator.userAgent;
if (u.indexOf('Mac') > -1 && devicePixelRatio !== 1) {
  // devicePixelRatio = devicePixelRatio / 2
}
if (u.indexOf('Safari') > -1 && u.indexOf('Chrome') < 0) {
  document.documentElement.setAttribute('data-v', 'Safari');
}
document.documentElement.setAttribute('data-dpr', devicePixelRatio);
metaEl.setAttribute('name', 'viewport'); metaEl.setAttribute('content', 'width=device-width, user-scalable=no,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
head.insertBefore(metaEl, title)