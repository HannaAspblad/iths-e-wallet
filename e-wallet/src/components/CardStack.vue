<template>
  <div>
    <Card
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

