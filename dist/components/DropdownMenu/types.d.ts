import React from "react";
import { Colors } from "../../theme";
import { BoxProps } from "../Box";
export interface DropdownMenuProps extends BoxProps {
    items?: DropdownMenuItems[];
    activeItem?: string;
    isBottomNav?: boolean;
    openMenuTimeout?: number;
    showItemsOnMobile?: boolean;
    index?: number;
    setMenuOpenByIndex?: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
    direction: "bottom" | "top";
}
export interface StyledDropdownMenuItemProps extends React.ComponentPropsWithoutRef<"button"> {
    disabled?: boolean;
    isActive?: boolean;
    direction?: 'top' | 'bottom';
}
export declare enum DropdownMenuItemType {
    INTERNAL_LINK = 0,
    EXTERNAL_LINK = 1,
    BUTTON = 2,
    DIVIDER = 3
}
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface DropdownMenuItems {
    label?: string | React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: DropdownMenuItemType;
    status?: LinkStatus;
    disabled?: boolean;
    iconName?: string;
    isMobileOnly?: boolean;
}
