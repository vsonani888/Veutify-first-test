<script setup>
    import {defineEmits} from 'vue';

    const emits = defineEmits(['selectOption'])

    const selectOption = (isColor) => {
        emits("selectOption", isColor)
    }
</script>

<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
        <v-list>
          <v-list-item
            prepend-avatar="https://www.webwise.ie/wp-content/uploads/2020/12/IMG1207.jpg"
            subtitle="pepepopo@chungus.com"
            title="amongus"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <V-list density = "compact" nav>
            <v-list-item 
                prepend-icon="mdi-image" 
                title="Color Gallery" 
                value="color"
                @click="selectOption(true)"
            />
            <v-list-item 
                prepend-icon="mdi-dialpad" 
                title="Grayspace Gallery" 
                value="color2"
                @click="selectOption(false)"
            />


        </V-list>

    </v-navigation-drawer>
</template>