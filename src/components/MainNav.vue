<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-dark-charcoal-1 px-8"
      >
        <!-- // === Test Rules applied, if the name changes, you must modify the test - Goktug === -->
        <a
          v-bind:href="url"
          class="itemc-center flex h-full items-center text-xl"
          >{{ company }}</a
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="h-full">
              <a href="" class="flex h-full items-center py-2.5">Teams</a>
            </li>
            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">Location</a>
            </li>
            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5"
                >Life at JavaScript Today</a
              >
            </li>
            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">How we Hire</a>
            </li>
            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">Students</a>
            </li>

            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">Jobs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "JavaScript Today - Careers", // Test rules appplied. If you change the name, you must modify the test. - Goktug
      url: "https://careers.javascripttoday.com",
    };
  },
};
</script>
