<template>
  <form class="input-form" v-on:input="renderToCard">
    <input
      type="text"
      maxlength="16"
      placeholder="XXXX XXXX XXXX XXXX"
      v-model="cardInput.number"
    />

    <input type="text" placeholder="Firstname Lastname" v-model="cardInput.holder" />

    <div class="selections">
      <select v-model="cardInput.validMonth">
        <option value="" disabled selected>Month</option>
        <option v-for="monthOption in formSelections.monthsArray" :key="monthOption">
          {{ monthOption }}
        </option>
      </select>

      <select v-model="cardInput.validYear">
        <option value="" disabled selected>Year</option>
        <option v-for="yearOption in formSelections.yearsArray" :key="yearOption">
          {{ yearOption }}
        </option>
      </select>

      <select v-model="cardInput.vendor">
        <option value="" disabled selected>Vendor</option>
        <option v-for="vendorOption in formSelections.vendorsArray" :key="vendorOption">
          {{ vendorOption }}
        </option>
      </select>
    </div>

    <router-link to="/">
      <button class="button" @click="addCard">
        <p>Add card</p>
      </button>
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cardInput: {
        number: "",
        holder: "",
        vendor: "",
        validMonth: "",
        validYear: "",
        active: "",
      },
      formSelections: {
        monthsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        yearsArray: [21, 22, 23, 24, 25],
        vendorsArray: ["Bitcoin Inc", "Blockchain Inc", "Evil Corp", "Ninja Bank"],
      },
      newCard: {},
    }
  },

  methods: {
    renderToCard() {
      this.$emit("render", this.cardInput)
    },

    addCard() {
      this.newCard = {
        id: new Date().toString(),
        holder: this.cardInput.holder,
        vendor: this.cardInput.vendor,
        number: Number(this.cardInput.number),
        validMonth: Number(this.cardInput.validMonth),
        validYear: Number(this.cardInput.validYear),
        active: false,
      }
      this.$root.cards.push(this.newCard)
    },
  },
}
</script>

<style scoped>
.input-form {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

input,
select {
  margin: 16px;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 8px 0 8px 8px;
  outline: none;
  border: 1.5px solid black;
}

select {
  width: fit-content;
}

.selections {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
