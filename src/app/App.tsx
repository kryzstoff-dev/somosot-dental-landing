import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Fragment, ReactNode } from "react";
import Providers from "./providers";

function App({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Providers>
        <Header />
        <main>{children}</main>
        <Footer />
      </Providers>
    </AppRouterCacheProvider>
  );
}

export default App;
