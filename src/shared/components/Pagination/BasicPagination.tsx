import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/shared/components/ui/pagination";
import {TPagination} from "@/shared/entities/aninlibria/model/AnilibriaPagination";
import {MouseEvent} from "react";
import {Button} from "@/shared/components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import * as React from "react";

export type TBasicPaginationProps = {
    onChange: (page: number) => void;
    paginationItem: TPagination;
    delta?: number;
}

export const BasicPagination = ({onChange, paginationItem, delta = 5}: TBasicPaginationProps) => {
    const {pages, current_page} = paginationItem;
    const {pagesArray, startPage, endPage} = _getVisiblePages({pages, current_page: 12, delta});
    const handleChangePage = (event: MouseEvent<HTMLLIElement>) => {
        const target = event.target as HTMLElement;
        const pageType = target.closest('[data-page]')?.getAttribute('data-page');

        if (!pageType) return;

        switch (pageType) {

            case 'prev':
                if (current_page > 1) {
                    onChange(current_page - 1);
                }
                break;
            case 'next':
                if (current_page < pages) {
                    onChange(current_page + 1);
                }
                break;
            case 'page':
                const page = Number(target.textContent);
                if (!isNaN(page) && page >= 1 && page <= pages && page !== current_page) {
                    onChange(page);
                }
                break;
            case 'more prev':
                if (current_page > 0) {
                    onChange(current_page - delta);
                }
                break;
            case 'more next':
                if (current_page < pages) {
                    onChange(current_page + delta);
                }
                break;
            default:
                break;
        }
    };
    console.log(Math.min(1, 12 - delta))
    return (
        <Pagination className={'select-none'} onClick={handleChangePage}>
            <PaginationContent>
                <PaginationItem>
                    <Button data-page={'prev'} className={'cursor-pointer'} variant={'ghost'} disabled={current_page <= 1}>
                        {/* add name props for i18n */}
                        <ChevronLeftIcon/>
                        <span>Previous</span>
                    </Button>
                </PaginationItem>
                <PaginationItem className={'flex items-center'}>
                    {
                        startPage > 3 &&
                        <Button data-page={'page'} className={'cursor-pointer'} variant={'ghost'}>1</Button>
                    }
                    {
                        startPage > 3 &&
                        <Button data-page={'more prev'} className={'cursor-pointer'} variant={'ghost'} asChild>
                            <PaginationEllipsis/>
                        </Button>
                    }
                </PaginationItem>
                <PaginationItem className={'flex gap-1'}>
                    {
                        pagesArray.map(page => (
                            <PaginationLink data-page={'page'} key={page} className={'cursor-pointer'}>
                                {page}
                            </PaginationLink>
                        ))
                    }
                </PaginationItem>
                <PaginationItem className={'flex items-center'}>
                    {
                        current_page < endPage &&
                        <Button data-page={'more next'} className={'cursor-pointer'} variant={'ghost'} asChild>
                            <PaginationEllipsis/>
                        </Button>
                    }
                    {
                        current_page < endPage &&
                        <Button data-page={'page'} className={'cursor-pointer'} variant={'ghost'}>
                            {pages}
                        </Button>
                    }
                </PaginationItem>
                <PaginationItem>
                    <Button data-page={'next'} className={'cursor-pointer'} variant={'ghost'} disabled={current_page >= pages}>
                        {/* add name props for i18n */}
                        <span>Next</span>
                        <ChevronRightIcon/>
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

const _getVisiblePages = ({pages, current_page, delta = 5}: {
    pages: number;
    current_page: number;
    delta?: number;
}) => {
    const pagesArray = [];
    const startPage = Math.max(1, current_page - Math.floor(delta / 2));
    const endPage = Math.min(pages, startPage + delta - 1);

    for (let i = startPage; i <= endPage; i++) {
        pagesArray.push(i);
    }

    return {
        pagesArray,
        startPage,
        endPage
    };
}