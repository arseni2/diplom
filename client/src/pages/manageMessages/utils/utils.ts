import styles from "../ui/ManageMessages.module.scss";
import {Appeals} from "@/gql/graphql";

export const getFullName = (client?: Appeals["client"]) => {
    return [client?.lastname, client?.firstname, client?.middlename].filter(Boolean).join(" ");
};

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
};

export const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export const getStatusLabel = (status: string) => {
    switch (status) {
        case "new":
            return "Новая";
        case "in_progress":
            return "В работе";
        case "done":
            return "Завершена";
        default:
            return status;
    }
};

export const getStatusColor = (status: string) => {
    switch (status) {
        case "Новая":
            return styles.statusNew;
        case "В работе":
            return styles.statusInProgress;
        case "Выполнено":
            return styles.statusDone;
        default:
            return "";
    }
};