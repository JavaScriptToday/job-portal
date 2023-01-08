// Dummy Sign-In Button it can be used if any backend and authentication added
<template>
  <button
    class="rounded border-0 bg-brand-dark-charcoal-1 px-5 py-3 font-medium text-white hover:shadow-yellow"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"], // adding a prop to use the same button for different purposes
};
</script>
