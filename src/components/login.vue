<template>
  <!-- Default form login -->
    <div class="container col-md-5" id="dv">
        <form class="text-center border border-light p-5" action="#!">

            <p class="h4 mb-4">Sign in</p>

            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">
            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

            <button class="btn btn-success btn-block my-4">Sign in</button>

            <p>Not a member?
                <router-link :to="{ path: '/user/register' }"><a href="">Register</a></router-link>
            </p>

            <p>or sign in with:</p>

            <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
            <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
            <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
            <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #dv{
        
    }
</style>