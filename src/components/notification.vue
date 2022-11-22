<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div style="width: fit-content; position:absolute; right: 10px; top: 80px" >
    <v-alert v-model="alert" :color="color" closable @click='close'>
        <div class="d-flex justify-space-between">
            <div class="bg-dark">{{message}}</div>
        </div>
    </v-alert>
</div>	
</template>

<script src="./js/notification.js"></script>