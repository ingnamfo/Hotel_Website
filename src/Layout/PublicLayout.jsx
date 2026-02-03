import { Outlet } from "react-router";
import Header from "../Component/Header";



export default function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
     
    </>
  );
}