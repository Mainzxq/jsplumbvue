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
            position: absolute;
          "
        >
          1
        </div>
        <div
          id="item2"
          style="
            background-color: green;
            width: 50px;
            height: 50px;
            position: absolute;
          "
        >
          2
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useTypeListStore } from "../store/TypeListStore";
import { storeToRefs } from "pinia";
import { onMounted, nextTick } from "vue";
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
      Connector: [
        "Flowchart",
        { cornerRadius: 5, alwaysRespectStubs: true, stub: 5 },
      ],
      PaintStyle: {
        strokeWidth: 6,
        stroke: "#567567",
        outlineStroke: "black",
        outlineWidth: 1,
      },
      Endpoint: ["Dot", { radius: 5 }],
      EndpointStyle: { fill: "#567567" },
      Anchor: [0.5, 0.5, 1, 1],
    });

    JSplumb.connect({
      source: "item1",
      target: "item2",
      endpoint: "Dot",
    });
    // 创建可以拖动的实体节点属性，使用DOM的id作为标记
    JSplumb.draggable("item1", {
      // 设置节点只能在父容器内移动，如果不设置，可以全局移动。
      containment: "jspContainer",
      grid: [10, 10],
      drag: () => {
        console.log("drag");
      },
      start: () => {},
      stop: () => {},
    });
    JSplumb.draggable("item2", {
      // 设置节点只能在父容器内移动，如果不设置，可以全局移动。
      containment: "jspContainer",
      grid: [10, 10],
      drag: () => {
        console.log("drag");
      },
      start: () => {},
      stop: () => {},
    });
    jsPlumb.setContainer("jspContainer");
  });
  const nextT = nextTick(() => {});
});
</script>

<style scoped>
#jspContainer {
  width: 300px;
  height: 300px;
  background-color: red;
  position: relative;
  padding: 1px;
}
</style>
