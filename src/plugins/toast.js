let Toast={};
let showToast = false;
Toast.install=function (Vue,options) {
    let opt = {
        defaultType:'bottom',
        duration:'2500'
    };
    for(let property in options){
        opt[property] = options[property];
    }
    Vue.prototype.$toast = (tips,type) => {
        if(type){
            opt.defaultType=type;
        }
        if(showToast){
            return;
        }
        let toastTpl = Vue.extend({
            data(){
                return {
                    show: showToast
                }
            },
            template: `<div v-show='show' class='vue-toast toast-${opt.defaultType}'>${tips}</div>`
        });
        let vm = new toastTpl();
        let tpl = vm.$mount().$el;

        document.body.appendChild(tpl);
        vm.show = showToast = true;

        setTimeout(()=> {
            vm.show = showToast = false;
        }, 2500)
    };
    ['bottom', 'center', 'top'].forEach((type) => {
        Vue.prototype.$toast[type] = (tips) =>
            Vue.prototype.$toast(tips,type)
    })
}
module.exports = Toast;