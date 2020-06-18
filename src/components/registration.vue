<template>

  <div class="container-fluid h-100'">
      <div class="col-md-11 h-100 d-flex justify-content-center align-items-center">
		<div class="col-md-6 rounded px-5 py-4 shadow bd-white text-left">
                <form class="text-center border border-light p-12">
                    
                    <p class="h4 mb-12">Sign up</p><br>

                    <div class="form-row mb-12">
                        <div class="col">
                            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
                        </div>
                    </div>
                    <br>
                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">
                    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock">
                    <br>
                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                    <button class="btn btn-success my-4 btn-block">Sign in</button>

                    <p>Already member?
                        <router-link :to="{ path: '/user/login' }"><a href="">Login</a></router-link>
                    </p>
                    
                    <p>or sign up with:</p>

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