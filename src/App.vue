<template>
   <the-header id="header"></the-header>
   <the-navigation
      v-bind:activeTab="activeTab"
      v-on:change-tab="changeTab"
   ></the-navigation>
   <resource-list
      v-if="activeTab === 'resource-list'"
      v-bind:resources="resources"
      v-on:delete-resource="deleteResource"
   ></resource-list>
   <keep-alive>
      <add-resource
         v-if="activeTab === 'add-resource'"
         v-on:addResource="addResource"
         v-on:invalidInput="toggleError"
      ></add-resource>
   </keep-alive>
   <error-modal v-if="wrongInput" v-on:close-modal="toggleError"></error-modal>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheNavigation from "./components/TheNavigation.vue";
import ResourceList from "./components/ResourceList.vue";
import AddResource from "./components/AddResource.vue";
import ErrorModal from "./components/ErrorModal.vue";

export default {
   components: {
      "the-header": TheHeader,
      "the-navigation": TheNavigation,
      "resource-list": ResourceList,
      "add-resource": AddResource,
      "error-modal": ErrorModal,
   },
   data() {
      return {
         resources: [
            {
               title: "HTML",
               description:
                  "Learn how to lay out the fundamental structure of web pages",
               link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
               title: "CSS",
               description: "Learn how to customize the look of your web pages",
               link: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
            },
            {
               title: "JavaScript",
               description:
                  "Learn how to make web pages dynamic and interactive",
               link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
         ],
         activeTab: "resource-list",
         wrongInput: false,
      };
   },

   methods: {
      changeTab(tab) {
         this.activeTab = tab;
      },
      deleteResource(title) {
         const index = this.resources.findIndex((r) => r.title === title);
         this.resources.splice(index, 1);
      },
      addResource(data) {
         this.resources.push(data);
         this.activeTab = "resource-list";
      },
      toggleError() {
         this.wrongInput = !this.wrongInput;
      },
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
   font: 400 125%/1 "Oswald", sans-serif;
   letter-spacing: 0.1em;
}

body {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: inherit;
}

button,
input,
textarea {
   outline: none;
   border: none;
   font-family: "Oswald", sans-serif;
   font-size: 1rem;
   background: none;
}

.button {
   padding: 0.5em 1em;
   border-radius: 0.25em;
   transition: color 0.25s ease, border-color 0.25s ease,
      background-color 0.25s ease;
   cursor: pointer;
   &--red-fill {
      background-color: firebrick;
      color: white;
      &:hover,
      &:focus {
         background-color: lighten(firebrick, 20%);
      }
   }
   &--blue-fill {
      background-color: midnightblue;
      color: white;
      transition: background-color 0.25s ease;
      &:hover,
      &:focus {
         background-color: lighten(midnightblue, 20%);
         color: white;
      }
   }
   &--blue-outline {
      color: midnightblue;
      border: 2px solid midnightblue;
      &:hover,
      &:focus {
         color: lighten(midnightblue, 20%);
         border-color: lighten(midnightblue, 20%);
      }
   }
}
</style>