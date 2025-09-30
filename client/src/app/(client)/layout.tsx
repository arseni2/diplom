import {Header} from "@/widgets/header/ui/Header";
import {Footer} from "@/widgets/footer/ui/Footer";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header/>
            <div style={{maxWidth: '1200px', margin: 'auto', height: '100%'}}>
                {children}
            </div>
            <Footer />
        </>
    );
}
