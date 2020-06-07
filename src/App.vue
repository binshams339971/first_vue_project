<template>
  <div id="app">
    <Navbar @searchItem="search" @cartRemovedItem="removeCartItem" :items="cart"></Navbar>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <router-view></router-view>
           <!-- <Inventory @cartItemAdded="addCartItem" :items="items"></Inventory> -->
          </div>
          <!--<div class="col-sm-3">
            <Cart @cartItemRemoved="removeCartItem" :items="cart"></Cart>
          </div>-->
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Inventory from './components/inventory'
import Cart from './components/cart'
import data from './data.js'

export default {
  components:{
    Navbar,
    Inventory,
    Cart
  },
  data(){
    return{
      items: [],
      cart: []
    }
  },
  mounted(){
    this.items = data
  },
  methods: {
    search(keyword){
      this.items = data.filter(item =>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addCartItem(item){
      if(this.cart.length != 0){
        this.cart.push(item)
      }
      else{
         this.cart.push(item)
      }
    },
    removeCartItem(index){
      this.cart.splice(index, 1)
    }
  }
}
</script>

<style>
  .container{
    padding-top: 10px;
  }
  .card{
    margin: 20px;
  }
</style>
