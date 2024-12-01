<script setup lang="ts">
import Greet from './Greet.vue';
import type { Access, Characteristics, Changes, PromotionContent, Section, CustomProperties, ContentAuthor, Tag, PresentationProperties, ContentSharing, ContentStory } from './../../types/domain/polaris/Teaser';

export interface Teaser {
  id: string;
  characteristics: Characteristics;
  access: Access;
  type: 'article';
  title: { value: string; };
  changes: Changes;
  urls: { relative: string; };
  media: PromotionContent;
  section: Section;
  customProperties: CustomProperties;
  authors?: ContentAuthor[];
  tags?: Tag[];
  presentationProperties?: PresentationProperties;
  contentSharing?: ContentSharing;
  story?: ContentStory;
  lead?: string;
}
function mediaUrl(imgId: string) {
  return "https://vcdn.polarismedia.no/" + imgId + "?fit=crop&h=400&q=80&tight=false&w=650";
}

const props = defineProps<Teaser>();
</script>

<template>
  <div :class="customProperties?.frontPageCardSize">
    <h4 v-if="customProperties?.breaking == 'true'">VARSKO!</h4>
    <h3>{{ title?.value }}</h3>
    <p class="lead" v-if="lead">
      {{ lead }}
    </p>
    <img :src="mediaUrl(media.imageAsset.id)" v-if="media?.imageAsset" />
  </div>
</template>

<style>
.medium {
  border: 1px dotted sandybrown;
  margin: 0.25em;
  padding: 0.25em;
  display: grid;
  grid-template-areas:
    "a a a"
    "b c c";
  grid-template-rows: 2.65rem 1fr;
  grid-template-columns: 1fr 100px 100px;
}

.medium img {
  width: 180px;
  grid-area: c;
}

.small {
  border-top: 1px dashed #ccc;
  font-size: 80%;
  display: grid;
  grid-template-areas:
    "a a a"
    "b b c";
  gap: 5px;
}

.small img {
  grid-area: c;
  width: 100px;
}

h3 {
  margin: 0;
  font-size: 1.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-area: a;
}

.lead {
  font-size: small;
  margin: 0;
  grid-area: b;
}
</style>