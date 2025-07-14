import {use} from "react";

export default function Page({ params }: { params: Promise<{ token: string }> }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {token} = use(params);
    return
}