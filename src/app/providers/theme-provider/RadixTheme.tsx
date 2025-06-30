import {ComponentProps} from "react";
import {Theme} from "@radix-ui/themes";

export function RadixTheme({children, ...props}: ComponentProps<typeof Theme>) {
    return <Theme {...props}>{children}</Theme>
}