import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type ServiceType = {
    title: string;
    description: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
};