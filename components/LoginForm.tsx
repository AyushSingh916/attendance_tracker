'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-900">Login</h2>
                <div className="mb-4">
                    <Label htmlFor="email" className="text-blue-900">Email</Label>
                    <Input 
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-blue-900"
                    />
                </div>

                <div className="mb-6">
                    <Label htmlFor="password" className="text-black">Password</Label>
                    <Input 
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="border-blue-900"
                    />
                </div>

                <Button type="submit" variant="default" className="w-full bg-blue-900 text-white hover:bg-blue-800">
                    Login
                </Button>
            </form>
        </div>
    );
}
