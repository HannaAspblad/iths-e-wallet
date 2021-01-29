<template>
  <div class="consent">
    <h3>Are you sure you want to remove this card?</h3>
    <span
        class="options">

      <div
        class="button"
        @click="consent(true)"
        >
        
        <p>Yep</p>
        </div>

      <div
        class="button"
        @click="consent(false)"
        >
      
      <p>Nope</p>
      </div>
    </span>
  </div>
</template>

<script>
export default {

  methods: {
    consent(value) {
      this.decided = true
      if (value == true) {
        this.$emit("consent")
      } else {
        this.$emit("dissent")
      }
    },
  },
}
</script>

<style scoped>
.consent {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 2px solid black;
  border-radius: 8px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
}

.options {
  display: flex;
  justify-content: space-around;
}

.button {
  height: 38px;
  border-radius: 8px;
  width: 350px;
  background-color: rgb(255, 255, 255);
  margin: 16px;
  border: 2px solid #222222;
  cursor: pointer;
  text-transform: uppercase;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
}
.button:hover {
  background-color: black;
  color: white;
}
.button p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}
</style>
