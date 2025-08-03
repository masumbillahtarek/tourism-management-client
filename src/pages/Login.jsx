import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";


const Login = () => {
    const navigate=useNavigate()
    const {login,signInWithGoogle,signInWithGithub}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        login(email,password)
          .then((result) => {
   console.log(result.user)
   navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
    }

    const handleGoogleLogin=()=>{
signInWithGoogle()
  .then((result) => {
    console.log(result.user)
       navigate('/')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode,errorMessage)
  });
    }
    const handleGithubLogin=()=>{
        signInWithGithub()
          .then((result) => {
    console.log(result.user)
       navigate('/')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode,errorMessage)
  });
    }
    return (
        <div>
          <div class="hero bg-base-200 min-h-screen my-7 rounded-2xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl text-center mt-6">Please Login Your Account</h2>
      <form onSubmit={handleLogin} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6 mx-auto">
          <button class="btn btn-primary w-full">Login</button>
          <button onClick={handleGoogleLogin} class="btn btn-primary w-full my-3">Login By Google</button>
          <button onClick={handleGithubLogin} class="btn btn-primary w-full">Login By Github</button>
        </div>
        <p className="text-xl text-center text-black">Don't you have any account ? Please <Link className="text-blue-500" to="/register">Register</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;