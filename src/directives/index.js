//懒加载
import { useIntersectionObserver } from '@vueuse/core'

export const LazyPlugin = {
    install(app){
        app.directive('img-lazy',{
            mounted(el,binding){
              //el 指令绑定的那个元素 img
              //binding bing.value 指令等于号后面绑定的表达式的值 图片url
              const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                  if(isIntersecting){
                    //进入视口区
                    el.src = binding.value
                    stop()
                  }
                },
              )
            }
        })
    }
}