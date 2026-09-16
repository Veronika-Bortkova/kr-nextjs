import "./globals.css";
import type {Metadata} from "next";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";


export const metadata: Metadata = {
    title: " ALL Movies",
    description: "ALL Movies",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
          <div className={"main"}>
              <HeaderComponent/>
              {children}

          {children}
          </div>
      </body>
    </html>
  );
}
