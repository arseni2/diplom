import {Contact} from "@/widgets/contact/ui/Contact";
import {Text} from "@gravity-ui/uikit"


const ClientContacts = () => {
    return (
        <div style={{textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Text variant={"display-1"}>
                Наши контакты
            </Text>
            <Contact />
        </div>
    );
};

export default ClientContacts;