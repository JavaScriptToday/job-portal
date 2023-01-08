// Dummy Sign-In Button it can be used if any backend and authentication added
<template>
  <button :class="{ primary: primaryD }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"], // adding a prop to use the same button for different purposes
  data() {
    return {
      primaryD: true,
    };
  },
};
</script>
<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-dark-charcoal-1 text-white hover:shadow-yellow;
}

/* .secondary {
} */
</style>
