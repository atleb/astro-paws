<script setup lang="ts">
import { addArticle, removeArticle, isArticleInList } from "../stores/readingList";
import { useStore } from '@nanostores/vue';

interface BagButtonProps {
    articleId: string;
}

const { articleId } = defineProps<BagButtonProps>();

// Create the computed store and connect it to Vue's reactivity system
const isInList = isArticleInList(articleId);
const isCurrentlyInList = useStore(isInList);

// Toggle function to add/remove from list
function toggleReadingList() {
    if (isCurrentlyInList.value) {
        removeArticle(articleId);
    } else {
        addArticle(articleId);
    }
}
</script>

<template>
    <div>
        <button type="button" @click="toggleReadingList()" :aria-pressed="isCurrentlyInList"
            :class="{ 'in-list': isCurrentlyInList }">
            <span class="icon">{{ isCurrentlyInList ? '✓' : '+' }}</span>
            <span>{{ isCurrentlyInList ? 'Saved to reading list' : 'Add to reading list' }}</span>
        </button>
    </div>
</template>

<style scoped>
button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s ease;
}

button.in-list {
    background-color: #e6ffe6;
    border-color: #00cc00;
}

.icon {
    font-weight: bold;
}
</style>