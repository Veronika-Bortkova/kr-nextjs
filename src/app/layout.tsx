import "./globals.css";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: " ALL Movies",
    description: "ALL Movies",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
