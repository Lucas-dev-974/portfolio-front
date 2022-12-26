<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main  class="full-height-nav container pt-5 ">
        <div class="d-flex w-100">
            <div id="sidebar">
                <v-card min-width="250" theme="custom">
                    <v-card-title primary-title>
                        Générale
                    </v-card-title>

                    <div class="">
                        NB visite today: X
                    </div>
                </v-card>
            </div>
            
            <div id="dash_pages" class="mx-2 d-flex w-100">
                <div class="dashpage_item w-100" v-if="$store.state.dash.on_page == 'project'">
                    <Project />
                </div>

                <div class="dashpage_item w-100" v-if="$store.state.dash.on_page == 'post'">
                    <Post />
                </div>

                <div class="dashpage_item w-100" v-if="$store.state.dash.on_page == 'note'">
                    <Note />
                </div>
            </div>
        </div>

        <btmNavigation />
    </main>
</template>

<script src="./js/dash.js"></script>