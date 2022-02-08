import { defineStore } from "pinia";

export const useTypeListStore = defineStore('typeListStore', {
    state: () => {
        return {
            typeList: [
                {
                    type: "start",
                    typeName: "开始",
                    nodeName: "开始",
                    logImg: "",
                    log_bg_color: "rgba(0, 128, 0, 0.2)",
                  },
                  {
                    type: "end",
                    typeName: "结束",
                    nodeName: "结束",
                    logImg: "",
                    log_bg_color: "rgba(255, 0, 0, 0.2)",
                  },
                  {
                    type: "dataSet",
                    typeName: "文件",
                    nodeName: "文件",
                    logImg: "",
                    log_bg_color: "rgba(0, 128, 0, 0.2)",
                  },
                  {
                    type: "encode",
                    typeName: "加密",
                    nodeName: "加密",
                    logImg: "",
                    log_bg_color: "rgba(163, 117, 233, 0.2)",
                  },
                  {
                    type: "personService",
                    typeName: "个人服务",
                    nodeName: "个人服务",
                    logImg: "",
                    log_bg_color: "rgba(132, 166, 251, 0.2)",
                  },
                  {
                    type: "arrange",
                    typeName: "清洗",
                    nodeName: "清洗",
                    logImg: "",
                    log_bg_color: "rgba(250, 205, 81, 0.2)",
                  },
            ]
        }
    },
    actions: {
        modify() {
            
        }
    }
})