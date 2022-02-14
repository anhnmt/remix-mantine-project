import {Button, MantineProvider} from "@mantine/core";
import type {MetaFunction} from "remix";
import {Links, LiveReload, Meta, Outlet, ScrollRestoration} from "remix";
import {Link} from "@remix-run/react";
import {ReactNode} from "react";

export const meta: MetaFunction = () => {
    return {title: "New Remix App"};
};

const Document = ({children}: { children: ReactNode }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" type="image/png"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles={true}>
            {children}
        </MantineProvider>

        <ScrollRestoration/>
        {process.env.NODE_ENV === "development" && <LiveReload/>}
        </body>
        </html>
    );
}

export default function App() {
    return (
        <Document>
            <Outlet/>
        </Document>
    );
}

export function ErrorBoundary({error}: { error: Error }) {
    return (
        <Document>
            <Button component={Link} to={'/'}>Home</Button>
        </Document>
    )
}

export function CatchBoundary() {
    return (
        <Document>
            <Button component={Link} to={'/'}>Home</Button>
        </Document>
    )
}
