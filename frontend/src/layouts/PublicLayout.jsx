import { Outlet } from "react-router-dom";
import { Header } from "@/components/public";

export default function PublicLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}