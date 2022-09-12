<template>
    <div class="container">
        <loadingSpinner v-if="loading" />
        <div v-else>
            <h1>{{ productData.Name }}</h1>
            <br>
            <img :src="productData.Pic" />
            <br/><br/>
            <h5>Descrizione: <br/> {{ productData.Caption }}</h5>
            <br/><br/>
            <button v-if="$store.getters.getToken !== ''" type="button" class="btn btn-primary">
                <i class="bi bi-plus"></i>
                Aggiungi al carrello
            </button>
            <div>
                Non sei loggato! Fai l'accesso prima di continuare<br/>
                <router-link to="/login">
                    <button type="button" class="btn btn-primary">
                    <i class="bi bi-person"></i>
                        Accedi
                    </button>
                </router-link>
            </div>
        </div> 
    </div>
</template>

<script>
import ProductService from '@/services/ProductService';
import loadingSpinner from '@/components/loadingSpinner.vue';

export default {
    name: "ProductDetails",
    components: {
        loadingSpinner,
    },
    data: () => ({
        productData: {},
        loading: true,
    }),
    mounted: function() {
        this.loadProductData();
    },
    methods: {
        loadProductData: function() {
            var self = this;
            ProductService.getProductDetails(this.$route.params.id)
            .then((res) => {
                self.productData = res;
                self.loading = false;
            }).catch((err) => console.log(err));
        }
    },
};
</script>