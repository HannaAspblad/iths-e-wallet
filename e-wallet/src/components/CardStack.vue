<template>
  <div class="grid-container">
    <Card class="stacked-card"
      v-for="card in allCards"
      :key="card.id"
      :cardData="card"
      :deleteButton="deleteButton"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue"

export default {
  components: {
    Card,
  },
  props: {
    cardData: Object,
  },

  data() {
    return {
      deleteButton: "X",
    }
  },

  computed: {
    allCards() {
      return this.$root.cards.filter((card) => card.active == false)
    },
  },
}
</script>

<style scoped>

.grid-container{
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
  
}

.stacked-card{
  grid-row: auto;
}
  
</style>
