import {useRef} from "react";

export type TPaginationObserverProps = {
    onChange: () => void
}

export const PaginationObserver = ({ onChange }: TPaginationObserverProps) => {
    const observer = useRef<IntersectionObserver>(null);
    const lastElementRef = (element: any) => {
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(async (entries) => {
            if(entries[0].isIntersecting) {
                await onChange();
            }
            if(element) observer.current?.observe(element);
        })
    };

    return <div ref={lastElementRef}/>;
}