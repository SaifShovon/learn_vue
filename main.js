Vue.component('task',{
	template: '<li><slot></slot></li>'
});

Vue.component('heading',{
	template: '<h1><slot></slot></h1>'
});




new Vue({
	el: '#root1'
});