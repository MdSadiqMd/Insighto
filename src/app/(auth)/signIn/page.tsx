"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/types/signin.types";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        if (formData.email === "" || formData.password === "") {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill in all fields",
            });
            return;
        }

        try {
            const response = await axios.post("/api/auth/signin", {
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem("authToken", response.data.authToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            router.push("/");
            toast({
                variant: "default",
                title: "Success",
                description: "Logged in successfully",
            });
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "User not found. Please sign up first.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "An error occurred while logging in. Please try again.",
                });
            }
        }
    };

    return (
        <Card className="mx-auto max-w-sm mt-[10%] items-center justify-center">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 space-y-3">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="youremail@gmail.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button onClick={handleLogin} type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signUp" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginPage;