import React from "react";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1638202994407-7318ff128ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8Mg%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <div className="my-4">
            <h1 className="text-5xl font-bold">Learn Without Limits with</h1>
            <h1 className="text-5xl font-bold mt-4">LearnHub</h1>
          </div>
          <p className="mb-5 text-xl font-medium">
            Transform your skills with our cutting-edge learning platform. Join
            thousands of learners achieving their goals.
          </p>
          <button className="btn btn-neutral rounded-2xl py-6 text-xl">
            Start Learning Free
          </button>
        </div>
      </div>
    </div>
  );
}
