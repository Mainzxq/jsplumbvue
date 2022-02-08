<template>
  <div>
    <ul>
      <div v-for="(item, index) in typeList" :key="index">{{ item.type }}</div>
    </ul>
  </div>
</template>

<script setup>
import { useTypeListStore } from "../store/TypeListStore";
import { storeToRefs } from "pinia";
const store = useTypeListStore();
const { typeList } = storeToRefs(store);
console.log(typeList);
</script>

<style lang="scss" scoped></style>
