<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<footer id="footer" class="d-flex justify-space-around">
		<section id="util-links" class="py-5">
			<a class="custom-link" href="mailto: lucas.lvn97439@gmail.com">Me contacter</a>
		</section>

		<section class="py-5">
			<p>© <span id="footer-year"></span> Lucas Leveneur - Dev IA</p>	
		</section>

		<section id="contact" class="py-5">
			<div class="d-flex" style="width: fit-content">
				<v-icon class='mx-2' icon="mdi-github" color="white"   @click='openLink("https://github.com/Lucas-dev-974")'></v-icon>
				<v-icon class='mx-2' icon="mdi-linkedin" color="white" @click='openLink("https://www.linkedin.com/in/lucas-leveneur-2153001b4/")'></v-icon>
			</div>	
		</section>			
	</footer>
</template>


<script>
export default{
	mounted(){
		document.getElementById('footer-year').innerHTML = this.getYear()
	},

	methods: {
		openLink: function(url){
			if(url != null){
				window.open(url, '_blank')
			}
		},

		getYear: function(){
			return new Date().getFullYear();
		},
	}
}
</script>