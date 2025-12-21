import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/validations/signInSchema";
import { Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      console.log("User signed in:", user);

      alert("Sign In successful!");
      reset();
      navigate("/"); 
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C9735] text-white py-2 rounded hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?
          <Link to="/signup" className="text-green-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
