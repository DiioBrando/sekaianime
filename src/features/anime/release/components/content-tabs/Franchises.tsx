import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";
import {Separator} from "@/shared/components/ui/separator";
import {Box, Card, Flex, Text} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import {Fragment} from "react";
import {Skeleton} from "@/shared/components/ui/skeleton";

export type TFranchiseProps = {
    title: Title | undefined;
    showResults: boolean;
    showSkeleton: boolean;
}

export const Franchises = ({title, showResults, showSkeleton}: TFranchiseProps) => {
    const releases = title?.franchises.flatMap(item => item.releases);

    return (
        <>
            {
                showResults &&
                releases?.map((item, index) => (
                    <Fragment key={item.id}>
                        {index > 0 && <Separator/>}
                        <Box className={'w-full'} asChild>
                            <Link className={'rounded-md p-4'} href={`/release/${item?.code}`}>
                                <Card className={'hover:bg-accent'}>
                                    <Flex className={'gap-1.5'} align={'center'}>
                                        <Image
                                            className={'rounded-md min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'}
                                            src={title?.posters.small.url ? `https://anilibria.tv${title.posters.small.url}` : '/images/default.jpg'}
                                            width={60}
                                            height={60}
                                            alt={'P'}
                                            loading={'lazy'}
                                        />
                                        <Box>
                                            <Text as={'div'} size={'2'} weight={'bold'}>
                                                {item?.names.ru}
                                            </Text>
                                            <Text as={'div'} size={'1'} color={'gray'}>
                                                season: {`${item?.names.en}`}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Card>
                            </Link>
                        </Box>
                    </Fragment>
                ))
            }
            {
                showSkeleton &&
                [...Array(4)].map((item, index) => (
                    <Fragment key={index}>
                        {index > 0 && <Separator/>}
                        <Box className={'w-full'} asChild>
                            <div className={'p-4'}>
                            <Card>
                                <Flex className={'gap-1.5'} align={'center'}>
                                    <Skeleton className={'rounded-md min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'}/>
                                    <Box className={'w-full space-y-2'}>
                                        <Skeleton className={'h-[12px] w-full max-w-[60%]'}/>
                                        <Skeleton className={'h-[12px] w-full max-w-[40%]'}/>
                                    </Box>
                                </Flex>
                            </Card>
                            </div>
                        </Box>
                    </Fragment>
                ))
            }
        </>
    );
}