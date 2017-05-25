
export default (router)=> {
	router.map({
        '/': {
            name: 'home',
            component(resolve) {
                require(['../views/index.vue'], resolve);
            }
        }
    });
}