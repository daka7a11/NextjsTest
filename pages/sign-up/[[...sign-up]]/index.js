import { SignUp as ClerkSignUp } from "@clerk/nextjs";
import { FormContainer, SectionHeading } from "../../../components";

export default function SignUp() {
  return (
    <>
      <SectionHeading>Sign up</SectionHeading>
      <FormContainer>
        <ClerkSignUp
          fallbackRedirectUrl="/dashboard"
          path="/sign-up"
        ></ClerkSignUp>
      </FormContainer>
    </>
  );
}
