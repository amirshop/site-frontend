<script setup lang="ts">
const containerRef = ref(null);
const slides = ref([
  {
    title: "beats",
    image: "https://biinoise.com/wp-content/uploads/2025/01/beats-scaled.jpg",
  },
  {
    title: "BL-PULSE-5",
    image:
      "https://biinoise.com/wp-content/uploads/2023/04/JBL-PULSE-5-Banner-1.jpg",
  },
  {
    title: "partybox",
    image:
      "https://biinoise.com/wp-content/uploads/2024/08/banner-jbl-partybox-320-final-1-scaled.jpg",
  },
  {
    title: "harman",
    image:
      "https://biinoise.com/wp-content/uploads/2024/08/banner-harman-citaion500-1-scaled.jpg",
  },
]);
const swiper = useSwiper(containerRef, {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <ClientOnly>
    <section>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
          <NuxtImg :src="slide.image" class="w-full" />
        </swiper-slide>
      </swiper-container>
    </section>
  </ClientOnly>
</template>

<style lang="css">
swiper-container {
  overflow: hidden;
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* width: 100; */
  /* height: 40vh; */
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
