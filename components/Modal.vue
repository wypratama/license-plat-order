<script setup lang="ts">
const { mostFrequent } = defineProps<{
  mostFrequent: string | null
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div
    id="modal-example"
    role="dialog"
    aria-hidden="true"
    style="display: flex;"
    class="modal show fixed top-0 left-0 z-50 w-screen h-screen bg-black/30 flex items-center flex-col justify-center p-6 fade"
    tabindex="-1"
  >
    <div
      class="absolute top-0 left-0 z-[0] w-full h-full"
      tabindex="-1"
    />

    <article
      class="modal-content flex flex-col relative m-0 rounded-md bg-white sm:my-16"
      aria-labelledby="modal-title"
      aria-describedby="modal-body"
    >
      <header class="flex p-4 items-center justify-between">
        <h2 class="m-0 text-xl font-medium max-w-[calc(100%_-_3rem)]">
          Most Frequent License
        </h2>
        <button
          type="button"
          class="flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-black/10"
          data-dismiss="modal"
          aria-label="Close"
          @click="emit('close')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="--size: 32rem"
          >
            <line x1="18" y1="6" x2="6" y2="18" style="--size: 32rem" />
            <line x1="6" y1="6" x2="18" y2="18" style="--size: 32rem" />
          </svg>
        </button>
      </header>
      <main class="relative flex-[1_1_auto] p-4" style="--size: 32rem">
        <p>The most frequent license plate number is: {{ mostFrequent }}</p>
      </main>
      <footer class="flex flex-shrink-0 flex-wrap items-center justify-end flex-row p-4 gap-1" style="--size: 32rem">
        <button
          type="button"
          class="w-20 flex items-center justify-center px-4 font-medium bg-green-700 text-white h-9 rounded-md rounded md hover:bg-green-800 transition-all duration-300"
          @click="emit('close')"
        >
          <span class="flex items-center justify-center space-x-2">OK</span>
        </button>
      </footer>
    </article>
  </div>
</template>

<style scoped>
    .modal.fade .modal-content {
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
    }
    .modal.show .modal-content{
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

    .modal-content {
    transform: scale(1.1);
    transition: visibility 0.25s ease-out, opacity 0.25s ease-out,
        transform 0.25s ease-out;
    }

    /** Modal static */

    .modal.modal-static .modal-content {
    transform: scale(1.02);
    }
</style>
