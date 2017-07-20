
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
        }
    });
}