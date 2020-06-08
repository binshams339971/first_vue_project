<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ path: '/'}"><h2>My Car Store</h2></router-link>      
    <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
        <input v-model="keyword" class="form-control mr-sm-5" id="search" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>
    </form>
    <!--<button class="btn btn-outline-success my-2 my-sm-2 bg-dark" data-toggle="modal" data-target="#exampleModalLong" style="border: none;"><i class="fas fa-shopping-cart fa-2x text-success"></i></button>
        <span class='badge badge-warning' id='lblCartCount'> {{ items.length }} </span> -->
        <hr id="a1">
        <router-link :to="{ path: '/user/login' }"><i class="fa fa-user fa-2x text-success float-sm-right" id="user" aria-hidden="true"></i></router-link>
        <div class="vl"></div>
        <div class="cart">
            <i class="fas fa-shopping-cart fa-2x text-success float-sm-right" id="a" data-toggle="modal" data-target="#exampleModalLong"></i>
            <span class='badge badge-warning' id='lblCartCount'> {{ items.length }} </span>
        </div>
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
                        <div v-if="items.length > 0">
                            <li v-for="(item, index) in items" :key="index" class="list-group-item">
                                <button class="btn btn-xs btn-danger" @click="removeItem(index)">-</button>
                                <span class="item-name">{{ item.title }}</span>
                                <!-- <span class="btn btn-xs btn-info" id="element1">-</span>
                                <span class="item-name" id="element2"><input type="text" class="form-control" value="1" style="width: 30px; height: 20px"></span>
                                <span class="btn btn-xs btn-info" id="element3">+</span> -->
                                <input type="button" id="element1" class="btn btn-default" value="-" @click="sub">
                                <input type="text" id="element2" v-model="c" class="form-control col-2">
                                <input type="button" id="element3" class="btn btn-default" value="+" @click="add">
                               
                                <span class="item-price float-right">${{ item.price }}</span>
                            </li>

                            <hr>
                        </div>
                        <div v-else>
                            <li class="list-group-item">
                                <h5 class="item-name">Cart is empty!</h5>
                            </li>
                        </div>
                            <li class="list-group-item">
                                <span class="item-name">Total</span>
                                <span class="item-price float-right">${{ totalPrice }}</span>
                            </li>
                    </div>
                    <div v-if="items.length > 0" class="modal-footer">
                        <button @click="checkOut" class="btn btn-success">Checkout</button>
                    </div>
                    </div>
                </div>
            </div>
   </nav>
</template>

<script>
export default {
    //props: ['items'],
    data(){
        return{
            keyword: '',
            c: '1'
        }
    },
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
        search(){
            this.$emit('searchItem', this.keyword)
        },
        removeItem(index){
            //this.$emit("cartRemovedItem", index)
            this.$store.commit('removeItem', index)
        },
        checkOut(){
            if(confirm('Are you sure you want to checkout?')){
                this.$store.commit('clearCart')
            }
        },
        sub(){
            if(this.c>1)
            {
                this.c--
            }
        },
        add(){
            this.c++
        }
    }
}
</script>

<style>
    #element1 {
        display:inline-block;     
        margin-left:60px;
    } 
    #element2 {
        display:inline-block; 
        text-align: center;
    }
    
    h2{
        width: 250px;
    }
    #search{
        width:350px;
        margin-left: 150px;
        
    }
    .vl {
        border-left: 4px solid rgb(192, 194, 192);
        height: 35px;
        padding: 10px;
        margin-left: 20px;
    }
    #a{
        cursor: pointer; 
    }
    #user{
        cursor: pointer; 
    }
    .cart{
        padding-right: 80px;
    }
    
    .modal-dialog {
        position: absolute;
        top: 50px;
        right: 0px;
        bottom: 0;
        left: 880px;
        z-index: 10040;
        overflow: auto;
        overflow-y: auto;
    }

   .badge {
        
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        height: 18px;
        width: 18px;
    }
    #lblCartCount {
        padding-top: -10px;
        font-size: 13px;
        background: #a81723;
        color: #fff;
        padding: 0 5px;
        vertical-align: top;
        margin-right: -40px;
        margin-left: 20px;
        margin-top: -1px; 
        transition: transform .2s;
    }
</style>