import { useRegister } from '@/hooks/useRegister';
import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
type Inputs = {
  username: string;
  email: string;
  password: string;
}
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
const {mutate,isPending}=useRegister()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form Data:", data);
   mutate(data)
  };
  return (
    <div className=' h-screen flex items-center justify-center py-12 px-2'>
       <form onSubmit={handleSubmit(onSubmit)}
         className='border border-gray-300
          rounded-2xl p-8 w-full max-w-lg space-y-4 
         shadow-lg'>
          <div className='flex flex-col items-center py-4'>
            <h1 className='text-xl font-bold'>Create Account</h1>
            <h3 className='font-medium opacity-70'>Start your learning journey today</h3>
          </div>
    {/* Name */}

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full rounded-xl"
            {...register("username", { required: "Name is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
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
          Already have an account? <Link className='underline' href={'/login'}>Sign in</Link>
        </h2>
       </form>
    </div>
  )
}
