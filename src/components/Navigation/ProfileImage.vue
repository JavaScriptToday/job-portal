<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="user profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://st2.depositphotos.com/1393072/49903/v/600/depositphotos_499033334-stock-illustration-guy-coder-with-a-code.jpg",
    };
  },
};
</script>
