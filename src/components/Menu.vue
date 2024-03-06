<template>
    <div>
        <button @click="clicked = !clicked">
            <div :class="['icon', clicked ? 'clicked' : '']"></div>
        </button>
        <div :class="['dimmer', clicked ? 'dimmer-enable' : '']"></div>
        <div :class="['menu', clicked?'menu-show':'']"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const clicked = ref(false);
</script>

<style scoped>
.icon {
    @apply bg-white w-[1.8rem] h-[0.2rem] block transition-all absolute top-[0.3rem] left-[0.1rem] outline outline-1;
}

.icon::before {
    content: "";
    @apply bg-white w-[1.8rem] h-[0.2rem] block transition-all absolute top-[0.6rem] outline outline-1;
}

.icon::after {
    content: "";
    @apply bg-white w-[1.8rem] h-[0.2rem] block transition-all absolute top-[1.2rem] outline outline-1;
}

button {
    @apply h-[2rem] w-[2rem] relative transition-all z-10 hover:scale-90
}

.clicked {
    @apply translate-y-[0.6rem] rotate-[-45deg]
}

.clicked::before {
    @apply translate-y-[-0.6rem] rotate-[-90deg]
}

.clicked::after {
    @apply translate-y-[-1.2rem] rotate-[-90deg]
}

.dimmer {
    @apply fixed top-0 right-0 h-screen bg-black w-screen transition-all bg-opacity-0 pointer-events-none
}

.dimmer-enable {
    @apply bg-opacity-25
}

.menu {
    @apply fixed bg-red-200 h-full w-[15rem] ml-auto outline-1 outline top-0 right-0  transition-all translate-x-[100%]
}

.menu-show {
    @apply translate-x-0
}
</style>
