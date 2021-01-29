<template>
  <div>
    <router-view />
  </div>
</template>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
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

a {
  text-decoration: none;
  color: #222222;
}

h1,
h2,
h3,
h4 {
  text-align: center;
  text-transform: uppercase;
}

h4 {
  margin: 8px;
  color: #7a7a7a;
  font-size: 0.7em;
}
</style>
