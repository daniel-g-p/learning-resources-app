<template>
   <section-template>
      <button
         class="tab-navigation__button button"
         v-bind:class="{
            'button--blue-fill': storedResourcesActive,
            'button--blue-outline': !storedResourcesActive,
         }"
         v-on:click="changeTab('resource-list')"
      >
         Stored Resources
      </button>
      <button
         class="tab-navigation__button button"
         v-bind:class="{
            'button--blue-fill': addResourcesActive,
            'button--blue-outline': !addResourcesActive,
         }"
         v-on:click="changeTab('add-resource')"
      >
         Add Resource
      </button>
   </section-template>
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
      &:not(:last-child) {
         margin-right: 0.5rem;
      }
   }
}
</style>