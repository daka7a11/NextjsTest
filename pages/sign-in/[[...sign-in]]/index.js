import { SignIn as ClerkSignIn } from "@clerk/nextjs";
import { FormContainer, SectionHeading } from "../../../components";

export default function SignIn() {
  return (
    <>
      <SectionHeading>Sign in</SectionHeading>
      <FormContainer>
        <ClerkSignIn
          fallbackRedirectUrl="/dashboard"
          path="/sign-in"
        ></ClerkSignIn>
      </FormContainer>
    </>
  );
}
