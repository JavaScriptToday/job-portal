<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="h-80 w-80 overflow-hidden rounded-full object-contain"
            src="https://scontent.fist1-1.fna.fbcdn.net/v/t39.30808-6/291724775_181536190941602_5946967402561208652_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8q9y3RL2QNUAX-3PCEx&_nc_ht=scontent.fist1-1.fna&oh=00_AfCDutxQoqAfNkQQQ1tcVSbT1um6DBdegV7OC9dQEHRkIA&oe=63C17313"
          />
        </div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/JobSearch/TheHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
  },
};
</script>
