<template>
  <v-footer class="d-flex justify-center" app>
        <v-btn v-for="{url, icon, tooltip} in socialLinks" variant="outlined" class="mr-2" :href="url" v-tooltip="tooltip" target="_blank" rounded>
            <Icon :name="icon" size="20"/>
        </v-btn>
  </v-footer>
</template>

<script setup lang="ts">
type SocialLink = {
    url: string;
    icon: string;
    tooltip: string;
}

const socialLinks : SocialLink[] = [
    {
        url: 'https://www.facebook.com/JoeKausitsMusic/',
        icon: 'fa7-brands:facebook',
        tooltip: 'Facebook'
    },
        {
        url: 'https://www.youtube.com/@JoeKMusics',
        icon: 'fa7-brands:youtube',
        tooltip: 'Youtube'
    },
        {
        url: 'https://www.tiktok.com/@joek.music',
        icon: 'fa7-brands:tiktok',
        tooltip: 'TikTok'
    },
]
</script>

<style scoped></style>
