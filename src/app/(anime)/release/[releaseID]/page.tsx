import {Release} from "@/features/anime/release/components/Release";
import {use} from "react";

export default function Page({ params }: { params: Promise<{ releaseID: string }> }) {
    const {releaseID} = use(params);
    return <Release id={releaseID}/>
}