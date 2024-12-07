import Header from "@/app/component/header"
import Styles from "@/app/global.css";
import Footer from "./component/footer";
import Section from "@/app/component/section"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Section />
        <Footer />
      </body>
    </html>
  );
}
