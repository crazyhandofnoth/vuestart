<template>
    <NamedSlotChild>

        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </NamedSlotChild>


</template>
<script setup>


import NamedSlotChild from './NamedSlotChild.vue';






</script>