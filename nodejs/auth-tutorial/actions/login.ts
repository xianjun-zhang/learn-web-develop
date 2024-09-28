"use server"

import { z } from "zod";

import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
    // Simulating a delay to test login-form "pending" state
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Validate the input fields using the loginSchema
    const validatedFields = loginSchema.safeParse(values);

    // If validation fails, return an error message
    if (!validatedFields.success) {
        return { error: "Invalid credentials!" };
    }
    
    return { success: "Login successful! Email sent." };
}
