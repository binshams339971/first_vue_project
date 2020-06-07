<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index" class="card" style="width: 15rem;">
            <router-link tag="div" :to="{ path: '/item/' + item.id}">
                <img :src="item.photo" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                </div>
            </router-link>
            <div class="card-footer">
                <span class="card-text">${{ item.price }}</span>
                <a @click="addToCart(item)" class="btn btn-primary">Add</a>
            </div>
        </div>          
    </div>
    <h1 v-else>Loading....</h1>
</template>

<script>
import axios from 'axios'
export default {
    //props: ['items'],
    data(){
        return{
            loading: true  
        }
    },
    computed:{
        items(){
            return this.$store.getters.getInventory
        },
        cart(){
            return this.$store.getters.getCart
        }
    },
    mounted(){
        this.fetchInventory()
    },
    methods:{
        addToCart(item){
            let a = false
            if(this.cart.length == 0){
                this.$store.commit('addToCart', item)
            }else{
                this.cart.forEach(i => {
                    if(i.id == item.id){
                        a = true
                    }
                    else{
                        
                    }
                });
                if(a == false){
                    this.$store.commit('addToCart', item)
                }else{
                    alert("Item already added!")
                }
                
            }
            //this.$emit('cartItemAdded', item)
            //this.$store.commit('addToCart', item)
        },
        fetchInventory(){
            var self = this
            axios.get('https://262f5a2f-eed5-492a-a5f0-99a73f4120a5.mock.pstmn.io/items').then(response =>(
                setTimeout(function(){
                    self.$store.commit('setInventory', response.data)
                    self.loading = false
                }, 5)  
            ))
        },
    }
}
</script>

<style>

</style>