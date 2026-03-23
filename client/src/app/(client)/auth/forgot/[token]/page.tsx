"use client"
import { SetPasswordForm } from "@/widgets/setPasswordForm/ui/SetPasswordForm";

const SetPasswordPage = ({ params }: { params: Promise<{ token: string }> }) => {
    return <SetPasswordForm params={params} />;
};

export default SetPasswordPage;