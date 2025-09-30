import styles from "./SearchHouseForm.module.scss"
import {Select, Slider} from "@gravity-ui/uikit";


export const SearchHouseForm = () => {
    return (
        <div>
            <Select placeholder={"Город"}>
                <Select.Option value="Вологда">Вологда</Select.Option>
            </Select>
            <Slider defaultValue={[20, 40]} />
            <Select placeholder={"Вид"}>
                <Select.Option value="Дом">Дом</Select.Option>
                <Select.Option value="Квартира">Квартира</Select.Option>
            </Select>
        </div>
    );
};