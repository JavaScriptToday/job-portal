<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-alt-2"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input placeholder="Software Engineer" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-alt-2 bg-brand-gray-alt-1 px-3"
        >in</span
      >

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <input v-model="location" />
        <text-input placeholder="Los Angeles" />
      </div>
    </div>

    <action-button text="Search" type="tertiary" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
