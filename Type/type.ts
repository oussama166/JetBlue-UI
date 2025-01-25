import { ReactNode } from "react";

export interface buttonLinkType {
  content?: string | null;
  underlineActive?: boolean;
  addChevron?: boolean;
  addIconBefore?: boolean;
  IconBefore?: ReactNode;
  addIconAfter?: boolean;
  IconAfter?: ReactNode;
  style?: string | null;
  isTrigger?: boolean;
}

export interface buttonType {
  variant: "Default" | "Fill" | "Outlined" | "Text" | "Icon";
  size: "Default" | "xsm" | "sm" | "md" | "lg" | "xlg";
  color:
    | "Default"
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "disabled"
    | string;
  content?: string | ReactNode;
  customStyle?: string;
  iconBefore?: ReactNode;
  iconBeforeShow?: boolean;
  iconAfter?: ReactNode;
  iconAfterShow?: boolean;
}
