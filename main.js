Vue.component('coupon',{
	template :`<input type = "text" placeholder = "Enter your coupon" @blur = "onCouponApplied"/>`,
	methods : {
		onCouponApplied(){
			this.$emit('applied')

		}
	}
});

new Vue({
	el: '#root',
	data : {
		couponApplied : false
	},
	methods : {
		onCouponApplied(){
			
			alert('couponApplied');
			this.couponApplied = true;

		}
	}
});