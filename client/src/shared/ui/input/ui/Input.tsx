import { TextInput, Text } from "@gravity-ui/uikit";
import {ComponentProps} from "react";
import styles from "./Input.module.scss"

type PropsType = {
    inputLabel?: string;
} & ComponentProps<typeof TextInput>;

export const Input = (props: PropsType) => {
    const { inputLabel, ...textInputProps } = props;

    return (
        <div>
            {inputLabel && <Text variant={"body-1"} className={styles.inputLabel}>{inputLabel}</Text>}
            <TextInput {...textInputProps} />
        </div>
    );
};