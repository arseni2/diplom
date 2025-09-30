import {ReactNode} from "react";
import {HeaderManage} from "@/widgets/headerManage/ui/HeaderManage";
import {SidebarManage} from "@/widgets/sidebarManage/ui/SidebarManage";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div style={{maxWidth: "1440px", margin: "auto"}}>
            <HeaderManage/>
            <div style={{display: "flex"}}>
                <SidebarManage/>
                <div style={{width:'100%'}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;