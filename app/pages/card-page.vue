<template>
  <div class="d-flex justify-center">
    <div class="d-flex flex-column align-center">
      <v-avatar image="/images/20250614_183751.jpg" size="200"></v-avatar>
      <div class="text-display-medium">Joe Kausits</div>
      <div class="text-headline-medium text-medium-emphasis">
        Country Artist
      </div>
    </div>
  </div>
  <v-row class="mt-4">
    <v-col cols="6" md="3" v-for="card in cards" :key="card.name">
      <v-card
        height="200"
        class="d-flex align-center"
        :href="card.url"
        v-tooltip="card.text"
      >
        <div
          class="text-headline-small flex-grow-1 text-center"
          :class="{
            'text-h6': mobile && card.icon == null,
            'text-h4': mobile,
          }"
        >
          <template v-if="card.icon">
            <Icon :name="card.icon" size="80" />
          </template>
          <template v-else>
            {{ card.text }}
          </template>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

type Card = {
  name: string;
  text: string;
  icon?: string;
  url: string;
};

const cards: Card[] = [
  {
    name: "website",
    text: "JoeKausits.com",
    url: "/",
  },
  {
    name: "facebook",
    text: "Facebook",
    url: "https://www.facebook.com/joekausitsmusic",
    icon: "fa7-brands:facebook",
  },
  {
    name: "youtube",
    text: "Youtube",
    url: "https://www.youtube.com/@JoeKMusics",
    icon: "fa7-brands:youtube",
  },
  {
    name: "tiktok",
    text: "TikTok",
    url: "https://www.tiktok.com/@joek.music",
    icon: "fa7-brands:tiktok",
  },
  {
    name: "venmo",
    text: "Venmo",
    url: "https://account.venmo.com/u/Joe-Kausits",
    icon: "fa7-brands:venmo",
  },
  {
    name: "email",
    icon: "fa7-solid:envelope",
    url: "mailto:JoeKausitsMusic@gmail.com",
    text: "Email",
  },
  {
    name: "phone",
    icon: "fa7-solid:phone",
    url: "tel:4407445152",
    text: "Phone",
  },
];
</script>

<style></style>
