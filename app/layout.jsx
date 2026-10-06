import "@fontsource-variable/manrope";
import "./globals.css";
import SiteChrome from "../components/SiteChrome";
export const metadata={title:{default:"Mattr × MADS — Thinking made visible",template:"%s | Mattr × MADS"},description:"A creative company with an execution studio built in. Strategy, content, digital, commerce and on-ground experiences. Mattr × MADS, Bengaluru.",icons:{icon:"/brand/mattr-logo.png"}};
export default function RootLayout({children}){return <html lang="en"><body><SiteChrome>{children}</SiteChrome></body></html>}
