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
import { FormData } from "@/types/signup.types";
import { useToast } from "@/hooks/use-toast";

const SignUpPage = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
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

    const handleSignup = async () => {
        if (formData.name === "" || formData.email === "" || formData.password === "") {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill in all fields",
            });
            return;
        }

        try {
            const response = await axios.post("/api/auth/signUp", {
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem("authToken", response.data.authToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            router.push("/");
            toast({
                variant: "default",
                title: "Success",
                description: "Signed up in successfully",
            });
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "An error occurred while creating your account. Please try again.",
            });
        }
    };

    return (
        <Card className="mx-auto max-w-sm mt-[10%] items-center justify-center">
            <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your credentials below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 space-y-3">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
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
                    <Button onClick={handleSignup} type="submit" className="w-full">
                        Create Account
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/signIn" className="underline">
                        Login
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default SignUpPage;