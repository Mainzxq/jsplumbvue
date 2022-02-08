<template>
  <div>
    <ul>
      <div v-for="(item, index) in typeList" :key="index">{{ item.type }}</div>
      <div id="jspContainer"></div>
    </ul>
  </div>
</template>

<script setup>
import { useTypeListStore } from "../store/TypeListStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { jsPlumb } from "jsplumb";
const store = useTypeListStore();
const { typeList } = storeToRefs(store);
console.log(typeList);
let JSplumb = null;

onMounted(() => {
  JSplumb = jsPlumb.getInstance();
  JSplumb.ready(() => {
    JSplumb.importDefaults({
      Container: "jspContainer",
      PaintStyle: {
        strokeWidth: 6,
        stroke: "#567567",
        outlineStroke: "black",
        outlineWidth: 1,
      },
      Endpoint: [
        "Rectangle",
        {
          height: 10,
          width: 10,
        },
      ],
      Connector: ["Bezier", { curviness: 30 }],
      Endpoint: ["Dot", { radius: 5 }],
      EndpointStyle: { fill: "#567567" },
      Anchor: [0.5, 0.5, 1, 1],
    });
    
  });
});
</script>

<style scoped>
#jspContainer {
  width: 300px;
  height: 300px;
  background-color: red;
  position: relative;
}
</style>
