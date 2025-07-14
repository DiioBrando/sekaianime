import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";
import {Separator} from "@/shared/components/ui/separator";
import {Box, Card, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import {Fragment} from "react";
import {Skeleton} from "@/shared/components/ui/skeleton";

export type TTeamsVoices = {
    title: Title | undefined;
    showResults: boolean;
    showSkeleton: boolean;
}

export const TeamsVoices = ({title, showResults, showSkeleton}: TTeamsVoices) => {
    const localization = title && Object.entries(title?.team).filter(([key, value]) => !!value.length) || [];

    return (
        <>
            {
                showResults &&
                localization?.map(([key, value], localizationIndex, localizationArr) => (
                    value.map((item, valueIndex, valueArr) => (
                        <Fragment key={valueIndex}>
                            <Box className={'w-full'} asChild>
                                <div className={'rounded-md p-4 cursor-pointer'}>
                                    <Card className={'hover:bg-accent'}>
                                        <Flex className={'gap-1.5'} align={'center'}>
                                            <Image
                                                className={'rounded-md min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'}
                                                src={'/images/default.jpg'}
                                                width={60}
                                                height={60}
                                                alt={'P'}
                                                loading={'lazy'}
                                            />
                                            <Box>
                                                <Text as={'div'} size={'2'} weight={'bold'}>
                                                    {item}
                                                </Text>
                                                <Text as={'div'} size={'1'} color={'gray'}>
                                                    {key}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Card>
                                </div>
                            </Box>
                            {!(
                                localizationIndex === localizationArr.length - 1 &&
                                valueIndex === valueArr.length - 1
                            ) && <Separator/>}
                        </Fragment>
                    ))
                ))
            }
            {
                showSkeleton &&
                [...Array(5)].map((_, valueIndex, valueArr) => (
                    <Fragment key={valueIndex}>
                        <Box className={'w-full'} asChild>
                            <div className={'rounded-md p-4 cursor-pointer'}>
                                <Card className={'hover:bg-accent'}>
                                    <Flex className={'gap-1.5'} align={'center'}>
                                        <Skeleton className={'rounded-md min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'}/>
                                        <Box className={'w-full space-y-1'}>
                                            <Skeleton className={'h-[12px] max-w-[60%]'}/>
                                            <Skeleton className={'h-[12px] max-w-[40%]'}/>
                                        </Box>
                                    </Flex>
                                </Card>
                            </div>
                        </Box>
                        {!(
                            valueIndex === valueArr.length - 1
                        ) && <Separator/>}
                    </Fragment>
                ))
            }
        </>
    );
}