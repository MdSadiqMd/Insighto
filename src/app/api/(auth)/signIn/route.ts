import { FormData } from "@/types/signin.types";
import { getPrismaClient } from "@/db/config";

export const runtime = "edge";

export async function POST(req: Request) {
    const { email, password }: FormData = await req.json();

    const prisma = getPrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            email: true,
            password: true
        }
    });
    if (!user || user.password !== password) return new Response("User not found", { status: 404 });

    return new Response("User found", { status: 200 });
}