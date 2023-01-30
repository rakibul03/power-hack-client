import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    fetch("https://projects-ph-server.vercel.app/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name Address is required!" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="pt-2 pl-1 text-red-400">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required!" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="pt-2 pl-1 text-red-400">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs pb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer!",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="pt-2 pl-1 text-red-400">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent w-full"
            value="signup"
            type="submit"
          />
        </form>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <Link className="text-gray-800 underline" to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
