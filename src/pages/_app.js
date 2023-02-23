import { Layout } from "../components/reuseables/Layout";
import { Space_Mono as SpaceMono } from "@next/font/google";

const smReg = SpaceMono({ subsets: ["latin"], weight: "400" });
const smBold = SpaceMono({ subsets: ["latin"], weight: "700" });
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: ${smReg.style.fontFamily};
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        html {
          font-size: 0.625em;
        }
        body {
          font-size: 1.6rem;
          overflow-x: hidden;
          background-color: hsla(0, 0%, 100%, 1);
          background-image: radial-gradient(
              at 76% 24%,
              hsla(155, 0%, 90%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 78% 74%,
              hsla(148, 0%, 90%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 25% 72%,
              hsla(110, 0%, 90%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 54% 51%,
              hsla(0, 2%, 67%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 24% 25%,
              hsla(0, 0%, 90%, 1) 0px,
              transparent 50%
            );
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${smBold.style.fontFamily};
        }
        button {
          font-size: 1.6rem;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
