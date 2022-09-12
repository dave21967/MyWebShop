<template>
  <div>
    <navBar />
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap';
import navBar from '@/components/navBar.vue';

export default {
  name: 'App',
  components: {
    navBar,
  }
};
</script>

<style>
  @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
  @import url("../node_modules/bootstrap-icons/font/bootstrap-icons.css");
</style>
