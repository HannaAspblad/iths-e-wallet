<template>
  <div>
    <DoubleCheck v-if="check" @consent="removeCard(cardData.id)" @dissent="hidePopUp" />

    <h4>{{ message }}</h4>

    <p class="delete-button" @click="checkConsent">
      {{ deleteButton }}
    </p>

    <div class="card" :class="this.cardData.vendor.replace(' ', '-').toLowerCase()">
      <div class="top">
        <img src="@/assets/chip-light.svg" alt="chip image" />

        <img class="logo" alt="vendor logo" :src="vendorLogo" />
      </div>

      <div class="middle">
        <span class="number">
          <p>
            {{ cardData.number }}
          </p>
        </span>
      </div>

      <div class="bottom">
        <span class="name">
          <p>CARDHOLDER NAME</p>
          <p class="large-text">
            {{ cardData.holder }}
          </p>
        </span>

        <span class="valid">
          <p>VALID THRU</p>
          <p class="large-text">{{ cardData.validMonth }} / {{ cardData.validYear }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import DoubleCheck from "@/components/DoubleCheck.vue"
export default {
  components: {
    DoubleCheck,
  },
  props: {
    cardData: Object,
    message: String,
    deleteButton: String,
  },

  data() {
    return {
      check: false,
    }
  },

  methods: {
    removeCard(id) {
      this.$root.cards = this.$root.cards.filter((card) => card.id != id)
    },

    checkConsent() {
      this.check = true
    },
    hidePopUp() {
      this.check = false
    },
  },

  computed: {
    vendorLogo: function () {
      if (this.cardData.vendor == "Evil Corp") {
        return require("@/assets/vendor-evil.svg")
      }
      if (this.cardData.vendor == "Ninja Bank") {
        return require("@/assets/vendor-ninja.svg")
      }
      if (this.cardData.vendor == "Blockchain Inc") {
        return require("@/assets/vendor-blockchain.svg")
      }
      if (this.cardData.vendor == "Bitcoin Inc") {
        return require("@/assets/vendor-bitcoin.svg")
      } else {
        return require("@/assets/vendor-bitcoin.svg")
      }
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 200px;
  border-radius: 20px;
  padding: 8px;
  margin: 0 0 16px 0;
  box-sizing: border-box;
  background-color: grey;
  box-shadow: inset 0px 1px 3px #ffffff50, 2px 4px 8px #00000050;
}

.logo {
  align-self: flex-start;
  padding: 8px;
}

.number p {
  font-size: 1.6em;
  margin-bottom: 8px;
}

p {
  margin: 0;
  text-transform: uppercase;
}

.card p {
  font-family: "Courier New", Courier, monospace;
  color: #323232;
}

.valid {
  text-align: right;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.middle {
  padding: 0 8px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.bottom p {
  font-size: 0.9rem;
}

.bottom .large-text {
  font-size: 1.2rem;
}

.ninja-bank {
  background-color: #313131;
}

.ninja-bank p {
  color: white;
}
.evil-corp {
  background-color: #e02e4e;
}

.evil-corp p {
  color: white;
}

.bitcoin-inc {
  background-color: #ffb546;
}

.blockchain-inc {
  background-color: #8152e7;
}

.delete-button {
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
}
</style>
