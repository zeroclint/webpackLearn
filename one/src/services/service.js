// // 使用方法:1.在js中 this.jzyService.debounce 2.在vue模板中jzyService.getPathName()
// let service={
//     getPathName:function(){
//         return location.hash.split('?')[0].substring(1).trim();
//     },
//   debounce: function (func, wait, immediate) {
//     // console.log('www')
//     var timeout
//     // debugger
//     return function(){
//       var context = this, args = arguments
//       var later = function () {
//         timeout = null
//         if (!immediate) return func.apply(context, args)
//       }
//       var callNow = immediate && !timeout
//       clearTimeout(timeout)
//       timeout = setTimeout(later, wait)
//       if (callNow) return func.apply(context, args)
//     }
//   }
// }
// export default service
