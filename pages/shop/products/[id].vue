<template>
    <div class="">

      {{route.params.id}}

      <hr>
      {{ss}}
    </div>
</template>
<script setup lang="ts">

const route = useRoute()


const ss = await useFetch(`/api/v2/products/${route.params.id}`,{
  method: "GET",

});
console.log(ss)
</script>