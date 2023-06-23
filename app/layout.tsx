//import "styles/globals.css";
import { ReactNode } from "react";
import Provider from "./Provider";

import '@/styles/libs/jsvectormap/css/jsvectormap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/icons.min.css';
import '@/styles/app.min.css';
import '@/styles/custom.min.css';
import 'feather-icons/dist/feather';
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

interface IProps {
  children: ReactNode;
}
export default async function RootLayout({ children }: IProps) {
  const session = await getServerSession(authOptions)
  console.log(session,'from layout')
  let navbar = session != null && session != undefined ? (
    <Navbar></Navbar>
  ):(<div></div>)
  
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
           {navbar}
          <div className={"  min-h-screen "}>{children}</div>
        </Provider>
      </body>
    </html>
  );
}