"use server"

import { z } from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // Validate the input fields using the RegisterSchema
    const validatedFields = RegisterSchema.safeParse(values);

    // If validation fails, return an error message
    if (!validatedFields.success) {
        return { error: "Invalid registration details!" };
    }
    
    return { success: "Registration successful! Verification email sent." };
}
