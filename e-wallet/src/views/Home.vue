<template>
  <div class="page-container">
    <Top />

    <Card :cardData="activeCard" :message="message" />

    <CardStack />

    <router-link to="/addcard">
      <button class="button"><p>Add new card</p></button>
    </router-link>
  </div>
</template>

<script>
import Top from "@/components/Top.vue"
import Card from "@/components/Card.vue"
import CardStack from "@/components/CardStack.vue"

export default {
  data() {
    return {
      cardData: {
        holder: "",
        number: 0,
        validMonth: 0,
        validYear: 0,
        vendor: "",
        id: "",
      },

      message: "Active card",
    }
  },

  components: {
    Top,
    Card,
    CardStack,
  },

  computed: {
    activeCard() {
      return this.$root.cards.find((card) => (card.active = true))
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
