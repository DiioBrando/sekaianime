import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {Button} from "@/shared/components/ui/button";
import {PlayIcon} from "lucide-react";
import {ListWithDots} from "@/shared/components/ListWithDots";
import {BaseCard} from "@/shared/components/card/BaseCard";

export type TShortCard = {
    name?: string;
    episode?: number;
    lengthTime?: string;
    genres?: string[];
    parts?: string[];
    src: string;
    href: string;
}


export const ShortCard = ({name, episode, lengthTime, genres, parts, src, href}: TShortCard) => {
    return (
        <BaseCard href={href} src={src} variant={'short'}>
            <CardHeader className={'p-0'}>
                {
                    name &&
                    <CardTitle className={'flex flex-wrap text-[13px] xl:text-[15px]'}>{name}</CardTitle>
                }
                {
                    episode &&
                    <CardDescription>episode {episode}</CardDescription>
                }
            </CardHeader>
            <CardContent/>
            <CardFooter className={'p-0 flex items-start flex-col space-y-3 wrap-break-word'}>
                <div className={'flex flex-col items-start space-y-1'}>
                    {
                        parts?.length &&
                        <ListWithDots items={parts}/>
                    }
                    {
                        genres?.length &&
                        <ListWithDots items={genres}/>
                    }
                </div>
                <div className={'flex items-center w-full justify-between'}>
                    <Button className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}>
                        <PlayIcon/>
                        Watch
                    </Button>
                    {
                        lengthTime &&
                        <Button className={'bg-muted/80 text-gray-400 h-[25px] w-full max-w-max'}>
                            {lengthTime}
                        </Button>
                    }
                </div>
            </CardFooter>
        </BaseCard>
    );
};