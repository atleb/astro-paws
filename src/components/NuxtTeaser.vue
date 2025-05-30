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

import { computed } from 'vue';

const props = defineProps<Teaser>();

// Computed property for dynamic section class
const sectionClass = computed(() => {
  if (props.section && props.section.title) {
    return `section-${props.section.title.toLowerCase().replace(/\s+/g, '-')}`;
  }
  return '';
});
</script>

<template>

  <a :href="`https://www.fvn.no/i/${id}`" class="teaser-link-wrapper">
    <!-- 
      Root element for the teaser.
      Applies:
      - Base 'teaser-container' class for general styling.
      - Dynamic class for card size (e.g., 'medium', 'small') from `customProperties.frontPageCardSize`.
      - 'breaking-news' class conditionally if `customProperties.breaking` is true.
    - 'no-image' class conditionally if `media.imageAsset.id` is falsy.
    -->
  <div :class="['teaser-container', customProperties?.frontPageCardSize, { 'breaking-news': customProperties?.breaking == 'true', 'no-image': !media?.imageAsset?.id }, sectionClass]">
      <!-- Conditional "VARSKO!" heading for breaking news -->
      <h4 v-if="customProperties?.breaking == 'true'" class="breaking-news-heading">VARSKO!</h4>
      <span v-if="access && !access.paywall" class="open-access-icon">OPEN</span>
      <h3>{{ title?.value }}</h3>
    <p class="lead" v-if="lead">
      {{ lead }}
    </p>
    <span v-if="tags && tags.length > 3" class="tag-count-badge">3+ tags</span>
    <span v-if="authors && authors.length > 1" class="author-count-badge">2+ authors</span>
    <img :src="mediaUrl(media.imageAsset.id)" v-if="media?.imageAsset?.id" />
    </div>
  </a>
</template>

<style>

/* 
  Color suggestions for section-specific borders:

  .section-sports {
    border-left: 5px solid #008000;  // Green
  }
  .section-nyheter { // Assuming 'Nyheter' (News)
    border-left: 5px solid #0000FF;  // Blue
  }
  .section-okonomi { // Assuming 'Økonomi' (Economy)
    border-top: 5px solid #FFD700;   // Gold
  }
  .section-kultur { // Assuming 'Kultur' (Culture)
    border-top: 5px solid #800080;   // Purple
  }
  .section-meninger { // Assuming 'Meninger' (Opinions)
    border-left: 5px solid #FFA500;  // Orange
  }
  .section-teknologi { // Assuming 'Teknologi' (Technology)
    border-top: 5px solid #4682B4;   // Steel Blue
  }
  .section-reise { // Assuming 'Reise' (Travel)
    border-left: 5px solid #20B2AA;  // Light Sea Green
  }
  .section-mat-og-drikke { // Assuming 'Mat og drikke' (Food and Drink)
    border-top: 5px solid #D2691E;   // Chocolate
  }
*/

/* Styling for the anchor tag that wraps the entire teaser */
.teaser-link-wrapper {
  display: block; /* Ensures the link takes up the full width of its container */
  color: inherit; /* Inherits text color from parent, preventing default link blue */
  text-decoration: none; /* Removes default underline from the link */
  /* The margin-bottom from .teaser-container is effectively managed here now if it were on the wrapper */
  /* However, .teaser-container itself has the margin, which is fine as it's inside the link */
}

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
  display: block; /* Ensure it behaves as a block-level element */
  width: 100%; /* Explicitly take full width for mobile-first */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  padding: var(--teaser-padding); /* Uses the base padding unit */
  border: 1px solid var(--color-border-default); /* Default border styling */
  /* margin-bottom is important for spacing between teasers. 
     Since the <a> tag is display:block, margin on .teaser-container will still work as expected. */
  margin-bottom: var(--teaser-margin-bottom); 
  border-radius: var(--teaser-border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* Subtle box shadow for a "lifted" effect */
  background-color: white; /* Ensures background color for content and shadow visibility */
  transition: box-shadow 0.3s ease; /* Smooth transition for hover effects */
}

  .no-image {
  grid-template-areas:
    "a a"  /* Title spans full width */
    "b b"; /* Lead text now spans full width */
  /* The lead text (area 'b') will now span both  columns defined in grid-template-columns. */
}

/* Enhanced shadow on hover for better interactivity */
/* This hover effect remains on .teaser-container. When the <a> is hovered, 
   the .teaser-container inside it will trigger this style. */
.teaser-container:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Slightly larger shadow on hover */
}

/* Enhanced focus visibility for keyboard navigation */
/* Applies a blue ring and enhanced shadow to the inner container when the link wrapper has focus. */
.teaser-link-wrapper:focus .teaser-container,
.teaser-link-wrapper:focus-visible .teaser-container {
  /* Using a distinct color for the focus ring, can be themed with a CSS var if desired */
  box-shadow: 0 0 0 2px #005fcc, 0 6px 12px rgba(0, 0, 0, 0.15); /* Blue focus ring and slightly enhanced shadow */
  /* This is more prominent than the default (0 2px 5px rgba(0,0,0,0.05)) 
     and hover (0 4px 10px rgba(0,0,0,0.1)) states. */
}

/* Styles for the "Breaking News" variant */
/* This class is on the .teaser-container div, inside the <a> tag */
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
  grid-template-columns: 1fr 100px 100px; /* Defines column widths, image area is last two columns */
  gap: 0.5em; /* Gap between grid cells */
}

/* Specific title styling for medium variant */
.medium h3 {
  font-size: 1.1rem; /* Overrides default title font-size for medium cards */
}


/* Styles for the "small" card size variant */
/* This variant also uses a grid layout, similar to medium but more compact */
.small {
  border: 1px solid var(--color-border-small); /* Specific border color for small cards */
  padding: calc(var(--teaser-padding) * 0.8); /* Slightly reduced padding for smaller cards */
  display: grid;
  grid-template-areas:
    "a a "  /* Title area */
    "b c"; /* Lead text area (b) and Image area (c) - image takes less relative space */
  gap: 0.3em; /* Smaller gap for compact layout */
  grid-template-rows: auto 1fr; /* Title row auto, content row takes remaining space */
}

/* Combined image styles for medium and small variants */
.medium img, .small img {
  grid-area: c;
  width: 100%;
  height: auto;
  align-self: center;
  border-radius: var(--teaser-border-radius);
}

.medium img {
  max-width: 200px; /* Maximum width for the image in medium cards */
}

.small img {
  max-width: 100px; /* Maximum width for the image in small cards - adjusted to be "tiny" */
}

/* Specific title styling for small variant */
.small h3 {
  font-size: 0.95rem; /* Overrides default title font-size for small cards */
}

/* Adjust lead text size for .small teasers to improve hierarchy with title */
.small .lead {
  font-size: 0.8rem; /* Reduced from default var(--font-size-lead) which is 0.9rem */
  /* Other .lead styles like line-height, margin, and ellipsis are inherited */
}

/* General styling for the main title (h3) */
/* Applied to all teasers; font-size can be overridden by specific variant styles (e.g., .medium h3) */
h3 {
  margin: 0 0 0.25em 0; /* Small bottom margin */
  font-size: var(--font-size-title); /* Default font size; can be overridden by .medium h3, .small h3 */
  font-weight: var(--font-weight-title); /* Uses defined font weight variable */
  overflow: hidden; /* Necessary for text-overflow to work */
  text-overflow: ellipsis; /* Adds ellipsis for overflowing text */
  /* Multi-line ellipsis: limits text to 2 lines and adds ellipsis */
  display: -webkit-box; 
  -webkit-line-clamp: 2; /* Number of lines to show before truncating */
  -webkit-box-orient: vertical; /* Required for -webkit-line-clamp to work */
  grid-area: a; /* Needs to be explicit for revised style... */
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
  grid-area: b; /* baseline for revised */
}

.teaser-container:not(.medium):not(.small) img {
  width: 100%; /* Image takes full width in default layout */
  height: auto; /* Maintain aspect ratio */
  margin-top: 0.5em; /* Space above the image */
  border-radius: var(--teaser-border-radius); /* Rounded corners */
}

/* Styling for the Open Access icon */
.open-access-icon {
  display: inline-block;
  background-color: #28a745; /* Green background */
  color: white; /* White text */
  padding: 0.2em 0.5em; /* Small padding */
  font-size: 0.7rem; /* Smaller font size */
  font-weight: bold;
  border-radius: var(--teaser-border-radius); /* Use existing border radius */
  margin-right: 0.5em; /* Space between icon and title */
  text-transform: uppercase;
  line-height: 1; /* Ensure line height doesn't add extra space */
}

/* Styling for the Tag Count badge */
.tag-count-badge {
  display: inline-block;
  background-color: #6c757d; /* Grey background */
  color: white; /* White text */
  padding: 0.2em 0.5em; /* Small padding */
  font-size: 0.7rem; /* Smaller font size */
  font-weight: normal;
  border-radius: var(--teaser-border-radius); /* Use existing border radius */
  margin-top: 0.5em; /* Space above the badge */
  margin-bottom: 0.5em; /* Space below the badge if image is not present */
  line-height: 1; /* Ensure line height doesn't add extra space */
}

/* Styling for the Author Count badge */
.author-count-badge {
  display: inline-block;
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  padding: 0.2em 0.5em; /* Small padding */
  font-size: 0.7rem; /* Smaller font size */
  font-weight: normal;
  border-radius: var(--teaser-border-radius); /* Use existing border radius */
  margin-top: 0.5em; /* Space above the badge */
  margin-left: 0.5em; /* Space to the left if tag badge is also present */
  margin-bottom: 0.5em; /* Space below the badge if image is not present */
  line-height: 1; /* Ensure line height doesn't add extra space */
}
</style>
