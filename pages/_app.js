import '../styles/global.css'
import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: '--font-grotesk',
    weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
