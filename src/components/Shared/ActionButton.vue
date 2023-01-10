<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary", //fallback
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded  bg-brand-dark-charcoal-1 text-white hover:shadow-red;
}

.secondary {
  @apply bg-transparent text-brand-dark-charcoal-1 hover:bg-brand-dark-charcoal-2 hover:text-white;
}

.tertiary {
  @apply rounded-r-3xl bg-transparent text-brand-dark-charcoal-1 hover:bg-brand-green-1 hover:text-white;
}
</style>
