import x from './x.js'
import image from './assets/yaya.jpg'
// 加入图片
console.log(image)
const div = document.querySelector('#app')
div.innerHTML=`<img src='${image}'>`

const button = document.createElement('button')
button.innerText="懒加载"
button.onclick=()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})   
}

div.appendChild(button)