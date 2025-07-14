import {use} from "react";

export default function Page({ params }: { params: Promise<{ profileID: string }> }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {profileID} = use(params);
    return
}