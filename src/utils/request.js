// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
import wx from 'wepy';
import { getlang, getlanguage } from '@/utils/getlang.js';
import {
	baseUrl,
	appid,
	appidGuide,
	authUrl,
	regOpen,
	baseUrl2
} from './env';
function getToken() {
	let USERID = wx.getStorageSync('userid');
	if (USERID) {
		let url = "/tour/api/getToken?userId=" + USERID
		requestLoading(url, "get", "", "", function (res) {
			if (res) {
				let token = res.data
				let myDate = new Date();
				let time = myDate.getTime();
				wx.setStorageSync('time', time);
				wx.setStorageSync('X-Token', token);
			}
		}, function () { })
	}
}
if (!wx.getStorageSync('time')) {
	getToken();
}
if (!wx.getStorageSync("X-Token")) {
	getToken();
}
function requestLoading(url, method, params, message, success, fail) {
	wx.showNavigationBarLoading()
	if (message != "") {
		wx.showLoading({
			title: message,
		})
	}
	wx.request({
		url: baseUrl+ url,
		data: params,
		header: {
			'Content-Type': 'application/json',
			'X-Token': wx.getStorageSync("X-Token")
			// 'content-type': 'application/x-www-form-urlencoded'
		},
		method: method,
		success: function (res) {
			wx.hideNavigationBarLoading()
			if (message != "") {
				wx.hideLoading()
			}
			if (res.statusCode == 200) {
				success(res.data)
			} else {
				if (!res.data.meta.success && res.data.meta.message == "token_exception") {
					wx.showToast({
						title: getlang().Please_try_again,
						icon: 'none',
						duration: 1000
					});
					getToken();
					success(res.data)
				} else {
					fail(res.data.meta.message)
				}
			}
		},
		fail: function (error) {
			wx.hideNavigationBarLoading()
			if (message != "") {
				wx.hideLoading()
			}
			wx.redirectTo({
				url: `/pages/error/index`,
				success: function () { },
				fail: function () { },
				complete: function () { }
			})
		},
		complete: function (res) {

		}
	})
}
export default requestLoading