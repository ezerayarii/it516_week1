"use server";

import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/prisma";

export type MessageFormState = {
  error?: string;
  success?: string;
};

export async function createMessage(
  _previousState: MessageFormState,
  formData: FormData,
): Promise<MessageFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!name || !email || !body) {
    return {
      error: "Name, email, and message are required.",
    };
  }

  try {
    const prisma = getPrisma();

    await prisma.message.create({
      data: {
        name,
        email,
        body,
      },
    });
  } catch (error) {
    console.error("Unable to save message:", error);

    return {
      error:
        "The message could not be saved. Check DATABASE_URL and run prisma db push.",
    };
  }

  revalidatePath("/messages");

  return {
    success: "Message saved successfully.",
  };
}
