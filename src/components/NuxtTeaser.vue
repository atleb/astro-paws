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
  promotionContent: PromotionContent;
  section: Section;
  customProperties: CustomProperties;
  authors?: ContentAuthor[];
  tags?: Tag[];
  presentationProperties?: PresentationProperties;
  contentSharing?: ContentSharing;
  story?: ContentStory;
  lead?: string;
}

const props = defineProps<Teaser>();
</script>

<template>
  <div :class="customProperties?.frontPageCardSize">
    <Greet :imgId="promotionContent.imageAsset.id" v-if="promotionContent?.imageAsset" />
    <h4 v-if="customProperties?.breaking == 'true'">VARSKO!</h4>
    <h3>{{ title?.value }}</h3>
    <p class="lead" v-if="lead && customProperties?.frontPageCardSize == 'medium'">
      {{ lead }}
    </p>
  </div>
</template>

<style>
.medium {
  border: 1px dotted sandybrown;
  margin: 0.5em;
  padding: 0.5em;
}

.small {
  border-top: 1px dashed plum;
  font-size: 70%;
  display: flex;
  gap: 5px;
}

h3 {
  margin: 0;
}

.lead {
  font-size: small;
  margin: 0;
  display: inline-flex;
}
</style>

 