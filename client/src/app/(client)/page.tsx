import { permanentRedirect } from 'next/navigation'


export default function Home() {
    permanentRedirect(`/rent`)
    return (
        <div>

        </div>
    );
}
