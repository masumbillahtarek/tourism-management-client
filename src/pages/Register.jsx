import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser}=useContext(AuthContext)
        const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const photo=form.photo.value
        const email=form.email.value
        const password=form.password.value
        console.log(email,password,photo,name)
        createUser(email,password)
          .then((result) => {
    console.log(result.user)
    //
   return updateProfile(result.user, {
  displayName: name, photoURL:photo
}).then(() => {
 console.log('Profile Updated')
}).catch((error) => {
console.log(error)
});
    //
  })
  .catch((error) => {
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
        <h2 className="text-3xl text-center mt-6">Please Register Your Account</h2>
      <form onSubmit={handleRegister} class="card-body">
         <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" class="input input-bordered" required />
        </div>
         <div class="form-control">
          <label class="label">
            <span class="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" class="input input-bordered" required />
        </div>
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
        
        </div>
        <div class="form-control mt-6 mx-auto">
          <button class="btn btn-primary w-full">Register</button>
        </div>
        <p className="text-xl text-center text-black">Already have any account ? Please <Link className="text-blue-500" to="/login">Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;