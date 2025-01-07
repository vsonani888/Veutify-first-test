<script setup>
  import {defineProps} from "vue"

  const p = defineProps(["isWithColor"])

  const copyURL = async (url) =>{
    await navigator.clipboard.writeText(url)
  }
  
</script>

<template>
    <VCard class="mx-5 my-2 pa-3">
        <VRow>
            <VCol
                v-for="n in 200"
                cols="4"
                sm="3"
                md="2"
                lg="1"
            >
                <VCard
                    :elevation = "isHovering ? 12:2"
                    v-bind = "props"
                    @click="copyURL(`https://picsum.photos/500/300?image=${n * 3 + 10}${p.isWithColor ? '' : '&grayscale'}`)"
                >
                    <VImg
                        :src="`https://picsum.photos/500/300?image=${n * 3 + 10}${p.isWithColor ? '' : '&grayscale'}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 3 + 10}${p.isWithColor ? '' : 'grayscale'}`"
                        aspect-ratio = "1"
                        cover
                    >

                        <template v-slot:placeholder>
                            <VRow
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    color="grey-lighten-5"
                                    indeterminate
                                ></v-progress-circular>

                            </VRow>
                        </template>

                    </VImg>
                </VCard>
            </VCol>
        </VRow>
    </VCard>
</template>