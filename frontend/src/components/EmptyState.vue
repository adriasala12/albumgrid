<template>
  <div>
    <div class="d-flex mt-5 justify-content-center text-light">
      <h1><i class="fa fa-dizzy text-light"></i></h1>
    </div>
    <div class="d-flex mt-3 justify-content-center text-light">
      <h4>{{ message }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyState",
  props: {
    message: String,
  },
};
</script>
