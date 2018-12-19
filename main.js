
Vue.component('message',{
	props : ['title','description'],
	data(){
		return{
			isVissible : true
		}
	},
	template : '<article v-show = "isVissible" class="message"><div class="message-header"><p>{{title}}</p><button @click = "isVissible = false" class="delete" aria-label="delete"></button></div><div class="message-body">{{description}}</div></article>'
});

new Vue({
	el: '#root'
});