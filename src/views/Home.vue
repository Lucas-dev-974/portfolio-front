<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>

    <!-- Section page présentation -->
    <section class="full-height-nav container" >
      <div id="presentation" class="d-flex flex-wrap">
        <div class="presentation-item pitem-name">
          Lucas Leveneur
        </div>

        <div class="d-flex flex-wrap pitem-text">
          <div class="">
            <div class="titre1">
              Bonjour et bienvenue sur Nova mon site web.
            </div>
            <br>
            <div class="texte1"> 
              Ici vous retrouverez un résumer de mes compétences, quelques projets sur lequelles j’ai pus travaillé (portfolio) mais aussi des articles, des notes de cours sur la programmation.
            </div>
          </div>

        </div>
      </div>

      <div id="lang-bandroll-container">
        <div class="shadow-scroll"></div>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-js" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="bxl:vuejs" style="color: #41b883;" data-width="40" data-height="40"></span>      
        <span class="iconify scroll-item" data-icon="logos:nodejs" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-php3" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="logos:laravel" style="color: #41b883;" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-python" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-django" style="color: #41b883;" data-width="40" data-height="40"></span>

        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-js" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="bxl:vuejs" style="color: #41b883;" data-width="40" data-height="40"></span>      
        <span class="iconify scroll-item" data-icon="logos:nodejs" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-php3" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="logos:laravel" style="color: #41b883;" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-python" data-width="40" data-height="40"></span>
        <span class="iconify scroll-item" data-icon="vscode-icons:file-type-django" style="color: #41b883;" data-width="40" data-height="40"></span>

        <div class="shadow-scroll shscroll-end" ></div>
      </div>

      <div class="d-flex justify-center " @click='scrollDown' id="scroll-down-link">
          scroll <v-icon class="mx-2"> mdi-chevron-down</v-icon>
      </div>
    </section>

    <!-- Section page portfolio -->
    <Portfolio />
  </div>
</template>

  
<script src='./js/home.js'></script>
