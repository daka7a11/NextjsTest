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
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
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
    </StyledHeader>
  );
};
