import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "../sections/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default MyApp;
