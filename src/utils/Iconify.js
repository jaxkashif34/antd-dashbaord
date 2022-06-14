import { Icon } from "@iconify/react";
export const Iconify = ({
  icon = "akar-icons:vscode-fill",
  style,
  ...other
}) => {
  return <Icon icon={icon} style={style} {...other} />;
};
