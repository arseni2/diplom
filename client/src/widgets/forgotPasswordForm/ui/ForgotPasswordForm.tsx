import styles from "./ForgotPasswordForm.module.scss"
import {Input} from "@/shared/ui/input/ui/Input";
import {Button} from "@gravity-ui/uikit";

export const ForgotPasswordForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.form_item}>
                <Input size={"l"} inputLabel={"Почта"} placeholder={"Почта"}/>
            </div>

            <div className={styles.form_item}>
                <Button view={"action"} size={"l"}>Сбросить</Button>
            </div>
        </div>
    );
};