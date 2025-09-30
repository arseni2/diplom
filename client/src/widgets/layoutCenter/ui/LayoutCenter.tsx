import styles from "./LayoutCenter.module.scss"
import {ReactNode} from "react";

export const LayoutCenter = ({children}: { children: ReactNode }) => {
    return (
        <div className={styles.center}>
            {children}
        </div>
    );
};