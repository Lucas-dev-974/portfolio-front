<template>
	<div class="container full-height-nav">

		<div class="d-flex my-5">
			<div class="title-spaced-letter-1">
				Projet : {{ project.name }}
			</div>	
		</div>
		<div class="mx-auto mt-5" >
			<v-carousel  width='fit-content' v-if='imgs.length > 0' height='400px'  hide-delimiters> 
				
			    <template v-slot:prev="{ props }">
			      <v-icon color="white" @click="props.onClick" >mdi-chevron-left</v-icon>
			    </template>
			    <template v-slot:next="{ props }">
			      <v-icon color="white" @click="props.onClick" >mdi-chevron-right</v-icon>
			    </template>
				<v-carousel-item v-for='(img, i) in imgs' v-bind:key="i" color='primary' :src="img"> 
				</v-carousel-item>
			</v-carousel>
		</div>



		<div class="  container">
			<div class="d-flex justify-space-between align-center mt-5">
				<div class="d-flex">
					<div v-for="categorie in project.categories" v-bind:key="categorie">
						<v-chip :color='$store.state.theme_colors._secondary' class="mx-1" size='small'>
						  {{ categorie.name }}
						</v-chip>
					</div>
				</div>

				<div class="d-flex" style="width: fit-content">
					<v-icon class='mx-2' icon="mdi-github" :color="$store.state.theme_colors.git_icon" @click='openLink(project.git_url)'></v-icon>
					<v-icon class='mx-2' icon="mdi-iframe-outline" :color="$store.state.theme_colors.demo_icon" @click='openLink(project.demo_url)'></v-icon>
				</div>
			</div>
			<div class=" italic nunito my-5 mb-10 mx-auto"> 
				{{ project.description }}
			</div>			
		</div>
	

	</div>
</template>

<script src='./js/project-template.js'></script>