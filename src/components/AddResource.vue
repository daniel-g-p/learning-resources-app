<template>
   <section-template>
      <form action="/" class="add-resource" v-on:submit.prevent="addResource">
         <div class="add-resource__field">
            <label for="title" class="add-resource__label">Title</label>
            <input
               type="text"
               class="add-resource__input"
               id="title"
               v-model="title"
            />
         </div>
         <div class="add-resource__field">
            <label for="description" class="add-resource__label"
               >Description</label
            >
            <textarea
               id="description"
               class="add-resource__input add-resource__input--textarea"
               v-model="description"
            ></textarea>
         </div>
         <div class="add-resource__field">
            <label for="description" class="add-resource__label">Link</label>
            <input
               type="text"
               class="add-resource__input"
               id="description"
               v-model="link"
            />
         </div>
         <button class="add-resource__button button button--red-fill">Add</button>
      </form>
   </section-template>
</template>

<script>
export default {
   emits: ["add-resource", "invalid-input"],
   data() {
      return {
         title: "",
         description: "",
         link: "",
      };
   },
   computed: {
      formData() {
         return {
            title: this.title,
            description: this.description,
            link: this.link,
         };
      },
   },
   methods: {
      addResource() {
         if (
            this.formData.title &&
            this.formData.description &&
            this.formData.link
         ) {
            this.$emit("add-resource", this.formData);
            this.clearForm();
         } else {
            this.$emit("invalid-input");
         }
      },
      clearForm() {
         this.title = "";
         this.description = "";
         this.link = "";
      },
   },
};
</script>

<style lang="scss" scoped>
.add-resource {
   &__field {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
   }
   &__label {
      margin-bottom: 0.5rem;
   }
   &__input {
      border: 2px solid grey;
      border-radius: 0.25em;
      padding: 0.5em;
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      transition: border-color 0.25s ease, background-color 0.25s ease;
      &--textarea {
         resize: none;
         height: 6em;
      }
      &:focus {
         border-color: black;
         background-color: whitesmoke;
      }
   }
}
</style>