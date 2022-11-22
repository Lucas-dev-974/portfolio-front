<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<section :class="(on_page ? 'full-height-nav pt-15' : '') + ' page container'" id="portfolio-section">
      <div class="text-center title-spaced-letter-1" style="height: 66px">
          portfolio
      </div>

      <div class="w-100 d-flex justify-center mb-6" v-if='on_page'>
        <div v-for="categorie in categories" v-bind:key="categorie">
          <div class="d-flex justify-center w-100">
            <div v-for="categorie_i in categorie" v-bind:key="categorie_i" class="mx-1">
              <div>
                <v-chip color="$store.state.theme_colors._secondary" size="small" :data-id='categorie_i.id' @click='getbyCategorie(categorie_i.id)'>
                  {{categorie_i.name}}
                </v-chip>
              </div>
            </div>            
          </div>
        </div>
      </div>
      
      <div class="d-flex flex-wrap justify-center">
        <div v-for="project in projects" v-bind:key="project.id" class="ma-2 ">

          <!-- CARD PROJECT -->
          <v-card  elevation="10"  width="250" height="250" @click.stop="openCard(project.id)">
            <v-img :src="project.preview_img_path" max-height='150' :aspect-ratio="9/3" cover></v-img>
            <div class="categories-items d-flex ma-2">
              <div v-for="categorie in project.categories" v-bind:key='categorie.id'>
                <v-chip :color='$store.state.theme_colors.card_icon' varient='elevated' size="x-small" class="mx-1">
                  {{ categorie.name }}
                </v-chip>
              </div>
            </div>

            <div class="mx-4">
              <h3> {{ project.name }} </h3>  
              
              <p>
                {{ project.description ?? 'Pas de description pour le moment.'}}
              </p>
            </div>
          </v-card>
          <!-- CARD PROJECT END -->
        </div>


      </div>

      <div v-if="on_page">
        <div class="text-center">
          <v-container class="w-50">
            <v-pagination @update:modelValue="changePage" color="secondary" theme="light" active-color="white" v-model="page" class="my-4" :length="total_page" ></v-pagination>
          </v-container>
        </div>        
      </div>

      <div v-else class="d-flex justify-center my-10">
        <v-btn elevation="4"  to='/portfolio'> Vois plus </v-btn>
      </div>  
    </section>
</template>


<script type="text/javascript" src="./js/Home-portfolio.js"></script>