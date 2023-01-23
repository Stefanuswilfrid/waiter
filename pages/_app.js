import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import { AuthContextProvider } from "../lib/AuthContext";
import { useMediaQuery } from "react-responsive";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <NextNProgress
          color="#2798be"
          options={{ easing: "ease", speed: 600, showSpinner: false }}
        />
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
      <MobileView />
    </>
  );
}

function MobileView() {
  return (
    <div className="mobile-view">
      <div className="text-wrap">
        <h1>Sorry , our website are limited to desktop only</h1>
        <p>wr(ai)t</p>
      </div>
    </div>
  );
}

export default MyApp;
