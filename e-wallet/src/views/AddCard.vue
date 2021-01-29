<template>
  <div class="page-container">
    <Top />

    <Card :cardData="cardData" :message="message" />

    <CardForm @render="render" />
  </div>
</template>

<script>
import Top from "@/components/Top.vue"
import Card from "@/components/Card.vue"
import CardForm from "@/components/CardForm.vue"

export default {
  components: {
    CardForm,
    Top,
    Card,
  },
  data() {
    return {
      cardData: {
        holder: "firstname lastname",
        number: "XXXX XXXX XXXX XXXX",
        validMonth: 0,
        validYear: 0,
        vendor: "",
      },

      message: "New card",
    }
  },

  methods: {
    render(card) {
      this.cardData = card
    },
  },
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
