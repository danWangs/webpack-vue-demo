
export default (router)=> {
	router.map({
        '/': {
            name: 'home',
            component(resolve) {
                require(['../views/index.vue'], resolve);
            }
        },
        '/news/:newsId/detail': {
            name: 'news_details',
            component(resolve) {
                require(['../views/newsDetail.vue'], resolve);
            }
        },
        '/editRow': {
            name: 'edit_row',
            component(resolve) {
                require(['../views/editRow.vue'], resolve);
            }
        },
        '/cart': {
            name: 'cart',
            component(resolve) {
                require(['../views/cart.vue'], resolve);
            }
        },
        '/proList': {
            name: 'pro_list',
            component(resolve) {
                require(['../views/list.vue'], resolve);
            }
        },
        '/proList/:proId': {
            name: 'pro_detail',
            component(resolve) {
                require(['../views/proDetail.vue'], resolve);
            }
        }
    });
}