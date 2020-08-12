import x from './x.js'
import image from './assets/yaya.jpg'
// 加入图片
console.log(image)
const div = document.querySelector('#app')
div.innerHTML=`<img src='${image}'>`