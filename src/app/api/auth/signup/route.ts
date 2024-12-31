import { FormData } from "@/types/signup.types";
import { getPrismaClient } from "@/db/config";

export const runtime = "edge";

export async function POST(req: Request) {
    const { name, email, password }: FormData = await req.json();

    const prisma = getPrismaClient();
    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        return new Response("User Created", { status: 200 });
    } catch (error) {
        return new Response("Something went wrong", { status: 500 });
    }
}
