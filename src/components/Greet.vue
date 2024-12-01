<script setup lang="ts">
interface greet {
    imgId: string;
    greeting?: string;
}
const props = defineProps<greet>();

function mediaUrl(imgId: string) {
    return "https://vcdn.polarismedia.no/" + imgId + "?fit=crop&h=400&q=80&tight=false&w=650";
}
</script>

<template>
    <div>
        <h2 v-if="greeting">Hey astro {{ greeting }}</h2>
        <img :src="mediaUrl(imgId)" />
    </div>
</template>

<style>
img {
    width: 200px;
}

.small img {
    width: 100px;
}
</style>
