'use client';

import {Button} from "@/shared/components/ui/button";
import {SearchIcon} from "lucide-react";
import {Modal} from "@/shared/components/modal/Modal";
import {useState} from "react";
import {useModalStore} from "@/shared/stores/modal";
import {Search} from "@/shared/components/search/Search";
import {useSearch} from "@/shared/entities/aninlibria/hooks/useSearch";
import {Skeleton} from "@/shared/components/ui/skeleton";
import Image from "next/image";
import {Box, Card, Flex, Text} from "@radix-ui/themes";
import {Separator} from "@/shared/components/ui/separator";
import Link from "next/link";

export type SearchModalState = {
    idModal: string;
}

export const SearchModal = ({idModal}: SearchModalState) => {
    const [searchParams, setSearchParams] = useState<string>('');
    const {setCurrentModal} = useModalStore();
    const {
        data, showSkeleton,
        showResults,
    } = useSearch({
        config: {
            params: {
                search: searchParams,
                items_per_page: 10,
            },
        }
    });

    return (
        <>
            <Button
                variant={'ghost'}
                className={'h-[35px] text-[15px] cursor-pointer'}
                onClick={() => setCurrentModal(idModal)}
            >
                <SearchIcon/>
            </Button>
            <Modal
                modalId={'searchHeaderID'}
                title={'Search release'}
                description={showResults ? searchParams : 'loading'}
                className={'flex flex-col px-4 py-7 sm:p-7 w-[calc(100vw-2rem)] 2xl:max-w-[1450px] max-w-[1300px] h-full max-h-[800px] sm:w-full sm:mx-6 top-[50%]'}
            >
                <Search setSearchParams={setSearchParams}/>
                {
                    showSkeleton &&
                    Array.from({length: 10}).map((_, i) => (
                        <div key={i} className={'flex gap-1 items-center'}>
                            <Skeleton className={'rounded-full min-h-[40px] min-w-[40px]'}/>
                            <div className={'w-full flex flex-col gap-1'}>
                                <Skeleton className={'w-full h-[13px]'}/>
                                <Skeleton className={'w-full max-w-[40%] h-[13px]'}/>
                            </div>
                        </div>
                    ))
                }
                <div className={'max-h-[800px] h-full overflow-hidden overflow-y-scroll space-y-2'}>
                    {
                        showResults &&
                        data?.list.map((item, index) => (
                            <>
                                {index > 0 && <Separator/>}
                                <Box className={'w-full'} asChild>
                                    <Link className={'hover:bg-accent rounded-md p-4'} href={`/release/${item.code}`}>
                                        <Card>
                                            <Flex className={'gap-1.5'} align={'center'}>
                                                <Image
                                                    className={'rounded-md min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'}
                                                    src={item.posters.small.url ? `https://anilibria.tv${item.posters.small.url}` : '/images/default.jpg'}
                                                    width={60} height={60} alt={'P'} loading={'lazy'}/>
                                                <Box>
                                                    <Text as={'div'} size={'2'} weight={'bold'}>
                                                        {item?.names.ru}
                                                    </Text>
                                                    <Text as={'div'} size={'1'} color={'gray'}>
                                                        {`${item?.season.year} - ${item?.type.string}`}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Card>
                                    </Link>
                                </Box>
                            </>
                        ))
                    }
                </div>
            </Modal>
        </>
    );
}