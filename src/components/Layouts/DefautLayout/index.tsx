import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type DefaultLayout = {
  children: ReactNode
}

function DefaultLayout({children}:DefaultLayout) {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>

    </div>
  )
}

export default DefaultLayout;