<template>
   <div class="resource">
      <h2 class="resource__heading">{{ title }}</h2>
      <button
         class="resource__delete button button--blue-outline"
         v-on:click="deleteResource"
      >
         Delete
      </button>
      <p class="resource__description">{{ description }}</p>
      <a v-bind:href="link" class="resource__link">Learn more</a>
   </div>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      link: {
         type: String,
         required: true,
      },
   },
   emits: ["delete-resource"],
   methods: {
      deleteResource() {
         this.$emit("delete-resource", this.title);
      },
   },
};
</script>

<style lang="scss" scoped>
.resource {
   display: grid;
   grid-template-columns: 1fr max-content;
   &__heading {
      margin-bottom: 0.75rem;
      grid-column: 1 / 2;
   }
   &__delete {
      font-size: 0.75rem;
      grid-column: 2 / 3;
   }
   &__description {
      margin-bottom: 1.5rem;
      grid-column: span 2;
   }
   &__link {
      grid-column: span 2;
      text-decoration: none;
      color: darkorange;
      transition: color 0.25s ease;
      &:hover,
      &:focus {
         color: lighten(darkorange, 20%);
      }
   }
}
</style>