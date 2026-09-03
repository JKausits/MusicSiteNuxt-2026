<template>
  <div class="text-title-large">Upcoming Shows</div>
  <v-divider :thickness="3" class="my-3" />
  <v-row>
    <v-col cols="12" md="3">
      <v-tabs v-model="selectedVideo" direction="vertical">
        <v-tab
          v-for="{ url, title, artist } in videos"
          :value="url"
          v-tooltip="`${title} - ${artist}`"
        >
          {{ title }}
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12" md="9">
      <iframe
        :src="selectedVideo"
        width="100%"
        height="560"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
      ></iframe>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
type Video = {
  url: string;
  title: string;
  artist: string;
};

const videos: Video[] = [
  {
    url: "https://www.youtube.com/embed/ytrj0bQ8_zc?si=WcjheOONdQZJfHGW",
    title: "Die A Happy Man",
    artist: "Thomas Rhett",
  },
  {
    url: "https://youtube.com/embed/dfNFVZbQzDM?si=3fdrH9y8Rqv4L7uW",
    title: "Check Yes Or No",
    artist: "George Strait",
  },
  {
    url: "https://www.youtube.com/embed/5Mrg3gF6iSY",
    title: "Everywhere But On",
    artist: "Matt Stell",
  },
  {
    url: "https://www.youtube.com/embed/MQaT2aIlXZE",
    title: "Lovin' You is Fun",
    artist: "Easton Corbin",
  },
];

const selectedVideo = ref<string>(videos[0]!.url);
</script>

<style scoped></style>
