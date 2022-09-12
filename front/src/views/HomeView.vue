<template>
  <div class="container">
    <h1>MyShop - Home</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <loadingSpinner v-if="loading" />
    <div v-else>
      <productCard v-for="prod in products" :key="prod.Code" :product="prod" />
    </div>
  </div>
</template>

<script>
import loadingSpinner from '../components/loadingSpinner.vue';
import ProductService from '../services/ProductService';
import productCard from '../components/productCard.vue';

export default {
  name: 'HomeView',
  components: {
    loadingSpinner,
    productCard,
  },
  data: () => ({
    loading: true,
    products: [],
  }),
  mounted: function() {
    this.loadProducts();
  },
  methods: {
    loadProducts: function() {
      var self = this;
      ProductService.getProducts()
      .then((res) => {
        console.log(res);
        self.products = res;
        self.loading = false;
      }).catch((err) => console.log(err));
    }
  },
}
</script>
