import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      cards: [
        {
          id: "1",
          holder: "Hani Banani",
          vendor: "Evil Corp",
          number: 1234567891011121,
          validMonth: 11,
          validYear: 6,
          active: true,
        },
      ],
    };
  },

  router,
  render: (h) => h(App),
}).$mount("#app");
