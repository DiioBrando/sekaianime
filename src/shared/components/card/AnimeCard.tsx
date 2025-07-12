import {CardContent, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {BaseCard} from "./BaseCard";
import {Button} from "@/shared/components/ui/button";
import {ListWithDots} from "@/shared/components/ListWithDots";
import {ListPlus, PlayIcon} from "lucide-react";

export type TAnimeCard = {
    name?: string;
    episode?: number;
    genres?: string[];
    parts?: string[];
    src: string;
    href: string;
}

export const AnimeCard = ({name, episode, parts, genres, href, src}: TAnimeCard) => {
    return (
        <BaseCard href={href} src={src} variant={'default'}>
            <CardHeader className={'p-0 lg:px-5'}>
                {
                    episode &&
                    <Button className={'rounded-sm bg-white/30 text-white h-[30px] text-[14px]'}>
                        {episode} Episode
                    </Button>
                }
            </CardHeader>
            <CardContent className={'p-0 text-center text-[12px] lg:text-[15px]'}>
                {name && <CardTitle>{name}</CardTitle>}
            </CardContent>
            <CardFooter className={'p-0 flex flex-col space-y-1'}>
                <div className={'flex flex-col'}>
                    {parts && <ListWithDots items={parts} className={'text-[10px]'}/>}
                    {genres && <ListWithDots items={genres} className={'text-[10px]'}/>}
                </div>
                <div className={'flex gap-1'}>
                    <Button className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}>
                        <PlayIcon/>
                        Watch
                    </Button>
                    <Button className={'bg-white/30 text-white cursor-pointer h-[30px] pointer-events-auto'}>
                        <ListPlus/>
                    </Button>
                </div>
            </CardFooter>
        </BaseCard>
    );
}