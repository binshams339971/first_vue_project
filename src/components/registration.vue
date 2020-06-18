<template>
  <div class="container-fluid h-50'">
      <div class="col-md-11 h-100 d-flex justify-content-center align-items-center">
		<div class="col-md-6 cr-signup rounded px-5 py-4 shadow bd-white text-left">
                <form class="text-center border border-light p-12">
                    <p class="h4 mb-12"  style="font-size: 35px">Sign up</p>
                     <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                         <label class="text-left" style="display:block;">Name<span class="text-danger">*</span></label>
                        <input type="text" class="form-control mb-4" v-model.trim="$v.name.$model" 
                        :class="{ 'is-invalid': $v.name.$error, 'is-valid': !$v.name.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.name.required">Name is required</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                        <label class="text-left" style="display:block;">Email<span class="text-danger">*</span></label>
                        <input type="text" class="form-control mb-4" v-model.trim="$v.email.$model" 
                        :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.email">Email is not valid</span>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'form-group--error': $v.phone.$error }">
                        <label class="text-left" style="display:block;">Phone<span class="text-danger">*</span></label>
                        <input type="text" class="form-control mb-4" v-model.trim="$v.phone.$model" 
                        :class="{ 'is-invalid': $v.phone.$error, 'is-valid': !$v.phone.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.phone.required">Phone is required.</span>
                        </div>
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="$v.phone.required"><span v-if="!$v.phone.phoneValid">Phone number is not valid </span></span>
                        </div>
                        <!-- <span v-if="$v.phone.required"><span v-if="!$v.phone.phoneValid"><br></span></span>
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.phone.minLength">Phone must have atleast {{$v.phone.$params.minLength.min}} letters.</span>
                          
                        </div> -->
                        
                    </div>
                    
                    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                        <label class="text-left" style="display:block;">Password<span class="text-danger">*</span></label>
                        <input type="password" class="form-control mb-4" v-model.trim="$v.password.$model" 
                        :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.password.required">Password is required</span>
                            <span v-if="!$v.password.minLength">Password must have atleast {{$v.password.$params.minLength.min}} letters.</span>
                            <span v-if="!$v.password.maxLength">Password length maximum {{$v.password.$params.maxLength.max}} letters.</span>
                        </div>
                    </div>
                    <button class="btn btn-success btn-block my-4" @click.prevent="asubmit">Sign up</button>

                    <p>Already member?
                        <router-link :to="{ path: '/user/login' }"><a href="">Login</a></router-link>
                    </p>
<!--                     
                    <p>or sign up with:</p>

                    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
                    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
                    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
                    <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a> -->

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
const isPhone = (value) => /^0(1|2|3|4|5|6|7|8)\d{9}$/.test(value);
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    validations: {
        name: {
            required,
            
        },
        email: {
            required,
            email
        },
        phone: {
            required,
            minLength: minLength(11),
            phoneValid:isPhone
        },
        password: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(12)
        }
  },
    methods: {
        asubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                 alert("Sign up")
            }
                    
        }
    }
}
</script>

<style>
.shadow {
    border: 3px solid rgb(95, 184, 172);
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
}
.cr-signup{
    line-height: 1;
}
</style>