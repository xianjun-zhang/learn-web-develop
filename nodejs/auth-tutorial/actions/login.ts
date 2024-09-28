"use server"

import { z } from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // Validate the input fields using the loginSchema
    const validatedFields = LoginSchema.safeParse(values);

    // If validation fails, return an error message
    if (!validatedFields.success) {
        return { error: "Invalid credentials!" };
    }
    
    return { success: "Login successful! Email sent." };
}
