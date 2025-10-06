import {Header} from "@/widgets/header/ui/Header";
import {Footer} from "@/widgets/footer/ui/Footer";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: 1, padding: "20px 0" }}>
                <div style={{ maxWidth: "1200px", margin: "auto", height: "100%" }}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
