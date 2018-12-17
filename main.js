Vue.component('task-list',{

template : '<div><task v-for = "task in tasks" v-text = "task.name"> </task></div>',
data(){
	return {
		tasks : [
			{name : "Add Route",status : true},
			{name : "Edit Route",status : true},
			{name : "Add Retailer",status : true},
			{name : "Edit Retailer",status : true},
			{name : "DHRSS Report",status : false},
			{name : "Menu Manager",status : false}
		]
	}
}

})


Vue.component('task',{
	template: '<li><slot></slot></li>'
});

Vue.component('heading',{
	template: '<h1><slot></slot></h1>'
});




new Vue({
	el: '#root'
});