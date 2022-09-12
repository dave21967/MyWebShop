<template>
    <div class="card">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <img :src="product.Pic" class="card-img-top prod-pic"/>
                </div>
                <div class="col">
                    <h4 class="card-title">{{ product.Name }}</h4>
                    <div class="row">
                        <p class="col">{{ product.Caption }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Prezzo: {{ product.Price }}€</p>
                    </div>
                    <div class="row">
                        <p class="col">Venduto da: {{ product.SellerName }}</p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <router-link :to="'/products/'+product.Code">
                                <button class="btn btn-primary">
                                    Visualizza
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productCard",
    props: ['product'],
};
</script>

<style scoped>
.prod-pic {
    width: 200px;
}

@media screen and (max-width: 600px) {
    .prod-pic {
        width: 100px;
    }
}
</style>