import request from '@/utils/request.js';
var funcArr=["gettoken","getindexdata","getOrderDetail","getStoreList","getOrderList","auth","getCartMenu","getMenuType","addcast","minuscat","cleardata","createorder","toPay","getAdreeInfo","getMenuDel"];
var apifunc={}
funcArr.forEach(function(item,index){
  apifunc[item] =function item(url, oType, data) {
    return new Promise(function (resolve, reject) {
      request(
        url,
        oType,
        data,
        '请求中',
        function(res) {
					resolve(res)
        },
        function(error) {
					reject(error)
					wx.showToast({
						title: error,
						icon: 'none',
						duration: 1000
					});
        }
      );
    })
  };
});
export default apifunc;