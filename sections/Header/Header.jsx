import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { StyledHeader } from "./elements";
import { useAuth, useUser } from "@clerk/nextjs";

export const Header = ({ ...props }) => {
  const { userId } = useAuth();
  const { user } = useUser();
  console.log(user);

  return (
    <StyledHeader {...props}>
      <Link href="/">Home</Link>
      {userId ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <p className="greeting">
            Hello, {user.emailAddresses[0].emailAddress}
          </p>
        </>
      ) : (
        ""
      )}
      <div className="user-CTA">
        <SignedOut>
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </StyledHeader>
  );
};
