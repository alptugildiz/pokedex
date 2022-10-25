<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Silkscreen', cursive;
}

body {
  margin: 0px;
  padding: 0px;
  /* height: 100vh;
  width: 100vw; */

  background: no-repeat center center fixed;
  background-size: cover;
  background-image: radial-gradient(circle, #645caa, #7063b0, #7c6bb6, #8772bc, #927ac2, #9e82c7, #aa8acb, #b693d0, #c59fd5, #d2acdb, #dfb9e1, #ebc7e8);
  /* background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12); */
  /* background-image: radial-gradient(circle, #6be370, #00dfaa, #00d5dc, #00c6fb, #00b2ff, #42a6ff, #6898fa, #8789f0, #8b81f5, #9177f8, #996cfa, #a35ffb); */
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
</style>
