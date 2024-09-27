import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back Login"
            backButtonLabel="Dont have an account?"
            backButtonHref="/register"
            showSocial={true}
        >
            Login Form
        </CardWrapper>
    );
};