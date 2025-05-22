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
  <!-- 
    Root element for the teaser.
    Applies:
    - Base 'teaser-container' class for general styling.
    - Dynamic class for card size (e.g., 'medium', 'small') from `customProperties.frontPageCardSize`.
    - 'breaking-news' class conditionally if `customProperties.breaking` is true.
  -->
  <div :class="['teaser-container', customProperties?.frontPageCardSize, { 'breaking-news': customProperties?.breaking == 'true' }]">
    <!-- Conditional "VARSKO!" heading for breaking news -->
    <h4 v-if="customProperties?.breaking == 'true'" class="breaking-news-heading">VARSKO!</h4>
    <h3>{{ title?.value }}</h3>
    <p class="lead" v-if="lead">
      {{ lead }}
    </p>
    <img :src="mediaUrl(media.imageAsset.id)" v-if="media?.imageAsset" />
  </div>
</template>

<style>
/* CSS Variables for consistent styling across the component */
:root {
  --teaser-border-radius: 4px; /* Default border radius for teasers and images */
  --teaser-padding: 0.75em; /* Base padding unit for teaser containers */
  --teaser-margin-bottom: 1.5em; /* Space below each teaser */

  --color-border-default: #e0e0e0; /* Default border color for teasers */
  --color-border-medium: #dcdcdc; /* Border color for medium-sized teasers */
  --color-border-small: #e0e0e0; /* Border color for small-sized teasers (consistent with default) */
  
  --color-breaking-news-bg: #fff5f5; /* Background color for breaking news teasers */
  --color-breaking-news-border: red; /* Border color for breaking news teasers */
  --color-breaking-news-text: red; /* Text color for breaking news specific elements (e.g., "VARSKO!" heading) */

  --font-size-title: 1.2rem; /* Font size for the main title (h3) */
  --font-weight-title: 600; /* Font weight for the main title */
  --font-size-lead: 0.9rem; /* Font size for the lead text paragraph */
  --line-height-lead: 1.4; /* Line height for the lead text for better readability */
  --font-size-breaking-heading: 1.1em; /* Font size for the "VARSKO!" heading in breaking news */
}

/* Default styles for the main teaser container */
.teaser-container {
  padding: var(--teaser-padding); /* Uses the base padding unit */
  border: 1px solid var(--color-border-default); /* Default border styling */
  margin-bottom: var(--teaser-margin-bottom);
  border-radius: var(--teaser-border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* Subtle box shadow for a "lifted" effect */
  background-color: white; /* Ensures background color for content and shadow visibility */
  transition: box-shadow 0.3s ease; /* Smooth transition for hover effects */
}

/* Enhanced shadow on hover for better interactivity */
.teaser-container:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Slightly larger shadow on hover */
}

/* Styles for the "Breaking News" variant */
.breaking-news {
  background-color: var(--color-breaking-news-bg); /* Distinct background for breaking news */
  border: 2px solid var(--color-breaking-news-border); /* Prominent border for breaking news */
  box-shadow: 0 2px 5px rgba(200, 0, 0, 0.1); /* Optional: themed shadow for breaking news */
}

/* Styles for the "VARSKO!" heading in breaking news */
.breaking-news-heading {
  color: var(--color-breaking-news-text); /* Uses breaking news text color */
  font-weight: bold;
  margin-bottom: 0.5em;
  font-size: var(--font-size-breaking-heading); /* Uses specific font size for this heading */
  letter-spacing: 0.5px; /* Adds letter-spacing for emphasis */
}

/* Styles for the "medium" card size variant */
/* This variant uses a grid layout with image on the right */
.medium {
  border: 1px solid var(--color-border-medium); /* Specific border color for medium cards */
  padding: var(--teaser-padding); /* Consistent padding */
  display: grid;
  grid-template-areas:
    "a a a"  /* Title area */
    "b c c"; /* Lead text area (b) and Image area (c) */
  grid-template-rows: auto 1fr; /* Title row height based on content, second row takes remaining space */
  grid-template-columns: 1fr 120px 120px; /* Defines column widths, image area is last two columns */
  gap: 0.5em; /* Gap between grid cells */
}

.medium img {
  width: 100%; /* Image takes full width of its grid area */
  height: auto; /* Maintains aspect ratio */
  max-width: 200px; /* Maximum width for the image in medium cards */
  grid-area: c; /* Assigns image to the 'c' grid area */
  align-self: center; /* Vertically centers the image in its grid cell */
  border-radius: var(--teaser-border-radius); /* Rounded corners for the image */
}

/* Styles for the "small" card size variant */
/* This variant also uses a grid layout, similar to medium but more compact */
.small {
  border: 1px solid var(--color-border-small); /* Specific border color for small cards */
  padding: calc(var(--teaser-padding) * 0.8); /* Slightly reduced padding for smaller cards */
  display: grid;
  grid-template-areas:
    "a a a"  /* Title area */
    "b b c"; /* Lead text area (b) and Image area (c) - image takes less relative space */
  gap: 0.3em; /* Smaller gap for compact layout */
  grid-template-rows: auto 1fr; /* Title row auto, content row takes remaining space */
}

.small img {
  grid-area: c; /* Assigns image to the 'c' grid area */
  width: 100%; /* Image takes full width of its grid area */
  height: auto; /* Maintains aspect ratio */
  max-width: 120px; /* Maximum width for the image in small cards */
  align-self: center; /* Vertically centers the image */
  border-radius: var(--teaser-border-radius); /* Rounded corners */
}

/* General styling for the main title (h3) */
h3 {
  margin: 0 0 0.25em 0; /* Small bottom margin */
  font-size: var(--font-size-title); /* Uses defined font size variable */
  font-weight: var(--font-weight-title); /* Uses defined font weight variable */
  overflow: hidden; /* Necessary for text-overflow to work */
  text-overflow: ellipsis; /* Adds ellipsis for overflowing text */
  /* Multi-line ellipsis: limits text to 2 lines and adds ellipsis */
  display: -webkit-box; 
  -webkit-line-clamp: 2; /* Number of lines to show before truncating */
  -webkit-box-orient: vertical; /* Required for -webkit-line-clamp to work */
  /* grid-area: a; is applied by .medium and .small variants */
}

/* General styling for the lead text paragraph */
.lead {
  font-size: var(--font-size-lead); /* Uses defined font size variable */
  line-height: var(--line-height-lead); /* Uses defined line height variable */
  margin: 0 0 0.5em 0; /* Small bottom margin */
  overflow: hidden; /* Necessary for text-overflow */
  text-overflow: ellipsis; /* Adds ellipsis for overflowing text */
  /* Multi-line ellipsis: limits text to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical; /* Required for -webkit-line-clamp */
  /* grid-area: b; is applied by .medium and .small variants */
}

/* Styles for default layout (when not .medium or .small) */
/* Ensures elements flow naturally when not in a grid variant. */
.teaser-container:not(.medium):not(.small) h3 {
  grid-area: unset; /* Resets grid area assignment */
}
.teaser-container:not(.medium):not(.small) .lead {
  grid-area: unset; /* Resets grid area assignment */
}
.teaser-container:not(.medium):not(.small) img {
  width: 100%; /* Image takes full width in default layout */
  height: auto; /* Maintain aspect ratio */
  margin-top: 0.5em; /* Space above the image */
  border-radius: var(--teaser-border-radius); /* Rounded corners */
}
</style>