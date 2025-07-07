import {SearchIcon} from "lucide-react";
import {Input} from "@/shared/components/ui/input";
import {ChangeEvent} from "react";

export type SearchProps = {
    setSearchParams: (value: string) => void;
}

export const Search = ({setSearchParams}: SearchProps) => {
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(e.currentTarget.value);
    }
    return (
        <section className={'flex gap-1.5'}>
            <div className={'relative w-full'}>
                <SearchIcon className={'absolute top-0 left-0 h-[36px] w-[36px] p-2 -z-10'}/>
                <Input
                    inputMode={'text'}
                    placeholder={'search anime'}
                    className={'w-full border-1 rounded-md pl-9 focus-visible:ring-0'}
                    onChange={onChangeSearch}
                />
            </div>
            {/* place for filters */}
        </section>
    );
}