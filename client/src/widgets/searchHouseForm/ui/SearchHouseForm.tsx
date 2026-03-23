import styles from "./SearchHouseForm.module.scss";
import {Button, Select} from "@gravity-ui/uikit";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/shared/ui/input/ui/Input";

export type SearchFormValues = {
    address?: string;
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
};

type PropsType = {
    isRent?: boolean;
    onSubmit?: (data: SearchFormValues) => void;
    addresses?: string[]
};

export const SearchHouseForm = ({ isRent, onSubmit, addresses }: PropsType) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SearchFormValues>({
        defaultValues: {
            address: "",
            minPrice: undefined,
            maxPrice: undefined,
            propertyType: "",
        },
    });

    const minPrice = watch("minPrice");
    const maxPrice = watch("maxPrice");

    const onSubmitForm = (data: SearchFormValues) => {
        const payload: SearchFormValues = {
            address: data.address || undefined,
            minPrice: data.minPrice ?? undefined,
            maxPrice: data.maxPrice ?? undefined,
            propertyType: data.propertyType || undefined,
        };
        onSubmit?.(payload);
    };

    console.log(addresses)
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmitForm)}>
            <Controller
                name="address"
                control={control}
                render={({ field }) => (
                    <Select
                        filterable={true}
                        placeholder="Адрес"
                        value={[field.value || ""]}
                        onUpdate={(data) => {field.onChange(data[0])}}
                    >
                        {addresses?.map((item) => {
                            return <Select.Option value={item}>{item}</Select.Option>
                        })}
                    </Select>
                )}
            />

            <div className={styles.rangeInputs}>
                <Controller
                    name="minPrice"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            placeholder="От"
                            value={field.value !== undefined && field.value !== null ? String(field.value) : ""}
                            onChange={(e) => {
                                const val = e.target.value === "" ? null : Number(e.target.value);
                                field.onChange(val);
                            }}
                        />
                    )}
                />
                <span className={styles.rangeSeparator}>–</span>
                <Controller
                    name="maxPrice"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            placeholder="До"
                            value={field.value !== undefined && field.value !== null ? String(field.value) : ""}
                            onChange={(e) => {
                                const val = e.target.value === "" ? null : Number(e.target.value);
                                field.onChange(val);
                            }}
                        />
                    )}
                />
            </div>

            {/*<Controller*/}
            {/*    name="propertyType"*/}
            {/*    control={control}*/}
            {/*    render={({ field }) => (*/}
            {/*        <Input*/}
            {/*            placeholder="Вид"*/}
            {/*            value={field.value || ""}*/}
            {/*            onChange={(e) => field.onChange(e.target.value)}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}

            <Button type="submit" view={"action"}>
                Найти
            </Button>
        </form>
    );
};