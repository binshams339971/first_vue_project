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
                <p class="card-text">${{ item.price }}</p>
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
            loading: true,
            items: []
        }
    },
    mounted(){
        this.fetchInventory()
    },
    methods:{
        addToCart(item){
            this.$emit('cartItemAdded', item)
        },
        fetchInventory(){
            var self = this
            axios.get('https://262f5a2f-eed5-492a-a5f0-99a73f4120a5.mock.pstmn.io/items').then(response =>(
                setTimeout(function(){
                    self.items = response.data,
                    self.loading = false
                }, 5)
                
            ))
        }
    }
}
</script>

<style>

</style>