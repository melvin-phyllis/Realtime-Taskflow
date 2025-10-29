import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TodoList",
    description: "Cree vos tache comme vous le shouaiter",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
