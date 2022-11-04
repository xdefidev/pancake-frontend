import React from "react";
import { Colors } from "../../theme";
export interface Props {
    color?: keyof Colors;
    mvsPriceUsd?: number;
    address?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
