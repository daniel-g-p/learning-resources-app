<template>
   <section class="section-block">
      <slot></slot>
   </section>
</template>

<style lang="scss" scoped>
.section-block {
   max-width: 36rem;
   padding: 1.5rem;
   margin: 1.5rem auto;
   border-radius: 0.5rem;
   box-shadow: 0 0.25rem 0.5rem rgba(black, 0.25);
}
</style>