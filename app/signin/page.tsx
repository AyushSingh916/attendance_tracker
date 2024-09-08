"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "../../components/Spinner";
import Quote from "@/components/Quote";

interface SignupInput {
  email: string;
  password: string;
}

function Auth() {
  const router = useRouter();
  const [form, setForm] = useState<SignupInput>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/login", form);
      const user = res.data.user;
      router.push("/home");
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center p-4">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-2xl font-extrabold text-center md:text-left">Login Your Account</h1>
            <p className="text-gray-600 text-center md:text-left">
              Don't have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </p>
          </div>
          <div className="hidden md:flex md:col-span-1">
            <Quote />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4 ml-8 mr-8">
        <LabelledInput
          label="Email"
          placeholder="Enter your email..."
          onchange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password..."
          onchange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gray-900 border border-gray-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          Login 
        </button>
      </div>
    </div>
  );
}

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, onchange }: LabelledInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>
      <input
        onChange={onchange}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
