import {cn} from "@/shared/lib/utils";
import {DotIcon} from "lucide-react";

export const ListWithDots = ({items, className = 'text-[12px]'}: { items: (string | number)[]; className?: string }) => (
    <div className={cn('flex flex-wrap justify-center text-slate-200', className)}>
        {items.map((item, index, array) => (
            <div key={index} className={'flex items-center'}>
                {item}
                {array.length - 1 > index && <DotIcon className={'h-[15px] w-[15px]'}/>}
            </div>
        ))}
    </div>
);