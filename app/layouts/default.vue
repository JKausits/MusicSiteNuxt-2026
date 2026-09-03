<template>
    <<v-app>
        <v-app-bar>
            <template #title>
                Joe Kausits
            </template>


        </v-app-bar>
        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>

        <app-footer />
    </v-app>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue';

</script>

<style scoped>

</style>