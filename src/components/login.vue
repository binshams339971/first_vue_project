<template>

    <div class="container-fluid h-100'">
        <div class="col-md-11 h-100 d-flex justify-content-center align-items-center">
            <div class="col-md-6 rounded px-5 py-4 shadow bd-white text-left">
                <form class="text-center border border-light p-12">
                    <p class="h4 mb-12">Sign in</p><br>
                    <input type="email" id="defaultLoginFormEmail" name="email" class="form-control mb-4" placeholder="E-mail">
                    <input type="password" id="defaultLoginFormPassword" name="password" class="form-control mb-4" placeholder="Password">

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
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 100px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
    }
</style>