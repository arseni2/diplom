"use client"
import {Alert, Button, Link as GLink} from '@gravity-ui/uikit';
import {House} from '@gravity-ui/icons';
import Head from 'next/head';
import {PageLayout} from "@gravity-ui/navigation";

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 – страница не найдена</title>
            </Head>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    padding: 'var(--g-spacing-5)',
                }}
            >
                <Alert
                    theme="danger"
                    title="404 – страница не найдена"
                    message="Похоже, такой страницы не существует. Проверьте адрес или вернитесь на главную."
                    actions={
                        <Button
                            view="normal"
                            size="xl"
                            href="/"
                            component={GLink}   // используем Link из Gravity UI
                        >
                            На главную
                        </Button>
                    }
                />
            </div>
        </>
    );

};

export default Custom404;