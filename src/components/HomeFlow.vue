<template>
  <div>
    <ul>
      <div v-for="(item, index) in typeList" :key="index">{{ item.type }}</div>
      <div id="jspContainer">
        <div
          id="item1"
          style="
            background-color: green;
            width: 50px;
            height: 50px;
            position: relative;
          "
        ></div>
        <div
          id="item2"
          style="
            background-color: green;
            width: 50px;
            height: 50px;
            position: relative;
          "
        ></div>
      </div>
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
    // 导入基本配置信息
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
    // 创建可以拖动的实体关系，使用DOM的id作为标记
    JSplumb.draggable("item1", {
      grid: [10, 10],
      drag: () => {
        console.log("drag");
      },
      start: () => {},
      stop: () => {},
    });
    JSplumb.draggable("item2", {
      grid: [10, 10],
      drag: () => {
        console.log("drag");
      },
      start: () => {},
      stop: () => {},
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
