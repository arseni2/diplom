import {LayoutCenter} from "@/widgets/layoutCenter/ui/LayoutCenter";
import {ReactNode} from "react";

const Layout = ({children}: Readonly<{ children: ReactNode }>) => {
    return (
        <LayoutCenter>
            {children}
        </LayoutCenter>
    );
};
export default Layout;