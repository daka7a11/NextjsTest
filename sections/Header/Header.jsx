import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { StyledHeader } from "./elements";
import { useAuth } from "@clerk/nextjs";

export const Header = ({ ...props }) => {
  const { userId } = useAuth();

  return (
    <StyledHeader {...props}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Link href="/">Home</Link>
      {userId ? <Link href="/dashboard">Dashboard</Link> : ""}
    </StyledHeader>
  );
};
