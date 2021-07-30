<template>
   <div class="modal">
      <section-template class="modal__content">
         <h2 class="modal__heading">Invalid input</h2>
         <p class="modal__text">
            Looks like some of the information you entered is invalid. Please
            verify your inputs and try again!
         </p>
         <button
            class="modal__button button button--blue-fill"
            v-on:click="closeModal"
         >
            Okay
         </button>
      </section-template>
   </div>
</template>

<script>
export default {
   emits: ["close-modal"],
   methods: {
      closeModal() {
         this.$emit("close-modal");
      },
   },
};
</script>

<style lang="scss" scoped>
.modal {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(black, 25%);
   display: flex;
   justify-content: center;
   align-items: center;
   &__content {
      background-color: white;
      width: 24rem;
      display: flex;
      flex-direction: column;
   }
   &__heading {
      margin-bottom: 0.75rem;
   }
   &__text {
      margin-bottom: 1.5rem;
   }
   &__button {
      align-self: flex-end;
   }
}
</style>