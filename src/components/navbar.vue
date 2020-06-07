<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ path: '/'}">My Online Store</router-link>      
    <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
        <input v-model="keyword" class="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>
    </form>
    <button class="btn btn-outline-success my-2 my-sm-2 bg-dark" data-toggle="modal" data-target="#exampleModalLong" style="border: none;"><i class="fas fa-shopping-cart fa-2x text-success"></i></button>

<!-- Modal -->
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle">Cart</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <li v-for="(item, index) in items" :key="index" class="list-group-item">
                            <button class="btn btn-xs btn-danger" @click="removeItem(index)">-</button>
                            <span class="item-name">{{ item.title }}</span>
                            <span class="item-price float-right">${{ item.price }}</span>
                        </li>

                        <hr>
                        <li class="list-group-item">
                            <span class="item-name">Total</span>
                            <span class="item-price float-right">${{ totalPrice }}</span>
                        </li>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Checkout</button>
                    </div>
                    </div>
                </div>
            </div>
   </nav>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return{
            keyword: ''
        }
    },
    computed:{
        totalPrice(){
            var total = 0
            this.items.forEach(a => {
                total += parseFloat(a.price)
            })
            return total.toFixed(2)
        }
    },
    methods:{
        search(){
            this.$emit('searchItem', this.keyword)
        },
        removeItem(index){
            this.$emit("cartRemovedItem", index)
        }
    }
}
</script>

<style>

</style>