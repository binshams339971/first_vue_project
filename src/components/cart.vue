<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
    <hr>
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
    </ul>

</template>

<script>
export default {
    //props: ['items'],
    computed:{
        items(){
            return this.$store.getters.getCart
        },
        totalPrice(){
            var total = 0
            this.items.forEach(a => {
                total += parseFloat(a.price)
            })
            return total.toFixed(2)
        }
    },
    methods:{
        removeItem(index){
            //this.$emit("cartItemRemoved", index)
            this.$store.commit('removeItem', index)
        }
    }
}
</script>

<style>

</style>