import {Release} from "@/features/anime/release/components/Release";

export default function Page({ params }: { params: { releaseID: string } }) {
    return <Release id={params.releaseID}/>
}