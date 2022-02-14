import {Button} from "@mantine/core";
import {Link} from "@remix-run/react";

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Welcome to Remix</h1>
            <Button component={Link} to={'/404'}>Error</Button>
        </div>
    );
}
