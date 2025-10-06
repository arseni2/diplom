import styles from "./RealtorForm.module.scss"
import {Handset} from "@gravity-ui/icons";
import {Button, Text} from "@gravity-ui/uikit";
import {Input} from "@/shared/ui/input/ui/Input";

export const RealtorForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_item}>
                <div className={styles.container_item_header}>
                    <Handset className={styles.container_item_header_icon}/>
                    <Text variant={"header-1"}>Форма для становления риелтором</Text>
                </div>

                <div className={styles.container_item_fields}>
                    <Input inputLabel={"ФИО"} placeholder={"ФИО"}/>
                    <Input inputLabel={"Email"} placeholder={"Email"}/>
                    <Input inputLabel={"Тг"} placeholder={"Тг"}/>
                    <Input inputLabel={"Номер"} placeholder={"Номер"}/>
                    <Button view={"action"} size={"l"}>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
};