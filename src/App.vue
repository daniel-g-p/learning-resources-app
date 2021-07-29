<template>
   <the-header></the-header>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
   components: {
      "the-header": TheHeader,
   },
};
</script>

<style lang="scss">
@font-face {
   font-family: "Oswald";
   src: url("./fonts/oswald-bold.woff2") format("woff2"),
      url("./fonts/oswald-bold.woff") format("woff");
   font-weight: 700;
   font-style: normal;
   font-display: swap;
}

@font-face {
   font-family: "Oswald";
   src: url("./fonts/oswald-regular.woff2") format("woff2"),
      url("./fonts/oswald-regular.woff") format("woff");
   font-weight: 400;
   font-style: normal;
   font-display: swap;
}

*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

html {
   font: 400 100%/1 "Oswald", sans-serif;
}

body {
   box-sizing: inherit;
}

button,
input {
   outline: none;
}
</style>