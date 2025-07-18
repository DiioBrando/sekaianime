import * as React from "react"

const MOBILE_BREAKPOINT = 864

export function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }
        mql.addEventListener("change", onChange)
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        return () => mql.removeEventListener("change", onChange)
    }, [])

    return !!isMobile
}

export function useWindowDimensions() {
    const [size, setSize] = React.useState({width: 0, height: 0});

    React.useEffect(() => {
        const updateSize = () => {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            setSize(prevState => ({...prevState, width: width, height: height}));
        }
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return {
        width: size.width,
        height: size.height,
    }
}