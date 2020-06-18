<template>

    <div class="container-fluid h-100'">
        <div class="col-md-11 h-100 d-flex justify-content-center align-items-center">
            <div class="col-md-6 rounded px-5 py-4 shadow bd-white text-left">
                <form class="text-center border border-light p-12">
                    <p class="h4 mb-12" style="font-size: 35px">Sign in</p>
                    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                        <label class="text-left" style="display:block; font-size: 18px;">Email<span class="text-danger">*</span></label>
                        <input type="text" class="form-control mb-4" v-model.trim="$v.email.$model" 
                        :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.email">Email is not valid</span>
                        </div>
                    </div>

                    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                        <label class="text-left" style="display:block; font-size: 18px;">Password<span class="text-danger">*</span></label>
                        <input type="password" class="form-control mb-4" v-model.trim="$v.password.$model" 
                        :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }">
                        <div class="invalid-feedback text-left" style="line-height: 0;">
                            <span v-if="!$v.password.required">Password is required</span>
                            <span v-if="!$v.password.minLength">Password must have atleast {{$v.password.$params.minLength.min}} letters.</span>
                        </div>
                    </div>

                    <div v-if="!$v.email.$error && !$v.password.$error">
                    </div>
                    <button class="btn btn-success btn-block my-4" @click.prevent="asubmit">Sign in</button>
                    <p>Not a member?
                        <router-link :to="{ path: '/user/register' }"><a href="">Register</a></router-link>
                    </p>
<!-- 
                    <p>or sign in with:</p>

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
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(4)
        }
  },
    methods: {
        asubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                alert("Sign in")
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
    
</style>