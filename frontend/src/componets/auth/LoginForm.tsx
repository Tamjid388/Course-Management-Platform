import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
type Inputs = {
  name: string;
  email: string;
  password: string;
}

export default function LoginForm() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
  
      const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log("Form Data:", data);
    };
  return (
    <div className=' h-screen flex items-center justify-center'>
       <form onSubmit={handleSubmit(onSubmit)}
         className='border border-gray-300
          rounded-2xl p-8 w-full max-w-lg space-y-4 
         shadow-lg'>
          <div className='flex flex-col items-center py-4'>
            <h1 className='text-xl font-bold'>Welcome Back</h1>
            <h3 className='font-medium opacity-70'>Sign in to continue learning</h3>
          </div>


            {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-xl"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
             {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full rounded-xl"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
           {/* Submit Button */}
        <button type="submit" className="btn btn-neutral w-full rounded-xl">
          Sign Up
        </button>
        <h2 className='text-center text-gray-700'>
         Do not have an account? <Link className='underline' href={'/register'}>Sign Up</Link>
        </h2>
       </form>
    </div>
  )
}
