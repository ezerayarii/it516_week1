"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!name || !email || !body) {
    throw new Error("Name, email, and message are required.");
  }

  await prisma.message.create({
    data: {
      name,
      email,
      body,
    },
  });

  revalidatePath("/messages");
  redirect("/messages");
}
