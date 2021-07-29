<template>
   <section-template v-for="resource in resources" v-bind:key="resource.title">
      <resource-list-item
         v-bind="resource"
         v-on:delete-resource="deleteResource"
      ></resource-list-item>
   </section-template>
</template>

<script>
import ResourceListItem from "./ResourceListItem.vue";

export default {
   components: {
      "resource-list-item": ResourceListItem,
   },
   props: {
      resources: {
         type: Object,
         required: true,
      },
   },
   emits: ["delete-resource"],
   methods: {
      deleteResource(title) {
         this.$emit("delete-resource", title);
      },
   },
};
</script>