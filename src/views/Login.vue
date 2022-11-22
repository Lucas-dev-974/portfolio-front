<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex w-100 justify-center align-item-center full-height">
    <div id="login-card-container" class="align-item-center">

      <v-card height="300" width='400' theme='dark' elevation='16'>
        <v-card-title class="py-3 mb-8 d-flex justify-center">
          <span class="letter-space-2 uppered bold"> Connexion </span>
        </v-card-title>
        
        <v-content>
          <v-form class="mx-7" id="loginForm">
            <v-text-field variant="outlined" v-model="email" :rules="email_rule"  label="email" id="email"></v-text-field>
            <v-text-field variant="outlined" v-model="password"  label="mot de passe" id="email" type='password'></v-text-field>
          </v-form>
        </v-content>

        <v-card-action class="mx-7 d-flex justify-end">
          <v-btn variant="tonal" v-on:click="login">
            Se connecter
          </v-btn>
        </v-card-action>
      </v-card>      
    </div>

  </div>
</template>

<script  src='./js/login.js'></script>