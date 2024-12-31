import { getPrismaClient } from "@/db/config";

export const runtime = "edge";

export async function DELETE(req: Request) {
    const { email }: any = await req.json();

    const prisma = getPrismaClient();
    try {
        await prisma.user.delete({
            where: {
                email
            }
        });
        return new Response("User Deleted", { status: 200 });
    } catch (error) {
        return new Response("Something went wrong", { status: 500 });
    }
}
