<template>
   <button
      class="tab-navigation__button"
      v-bind:class="{ 'tab-navigation__button--active': storedResourcesActive }"
      v-on:click="changeTab('resource-list')"
   >
      Stored Resources
   </button>
   <button
      class="tab-navigation__button"
      v-bind:class="{ 'tab-navigation__button--active': addResourcesActive }"
      v-on:click="changeTab('add-resource')"
   >
      Add Resource
   </button>
</template>

<script>
export default {
   props: {
      activeTab: {
         type: String,
         required: true,
         validator(value) {
            return ["resource-list", "add-resource"].includes(value);
         },
      },
   },
   emits: ["change-tab"],
   computed: {
      storedResourcesActive() {
         return this.activeTab === "resource-list";
      },
      addResourcesActive() {
         return this.activeTab === "add-resource";
      },
   },
   methods: {
      changeTab(tab) {
         this.$emit("change-tab", tab);
      },
   },
};
</script>

<style lang="scss" scoped>
.tab-navigation {
   &__button {
      padding: 0.5em 1em;
      border-radius: 0.25em;
      color: midnightblue;
      transition: color 0.25s ease;
      cursor: pointer;
      &:not(:last-child) {
         margin-right: 0.5rem;
      }
      &:hover,
      &:focus {
         color: lighten(midnightblue, 20%);
      }
      &--active {
         background-color: midnightblue;
         color: white;
         transition: background-color 0.25s ease;
         &:hover,
         &:focus {
            background-color: lighten(midnightblue, 20%);
            color: white;
         }
      }
   }
}
</style>