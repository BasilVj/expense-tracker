import React from "react";
import { IconType } from "react-icons";

type props = {
  iconName: IconType;
  iconcontainerCls: string;
  iconCls: string;
};
const Icon = ({ iconName, iconcontainerCls, iconCls }: props) => {
  const Icons = iconName;

  return (
    <div className={`${iconcontainerCls}`}>
      <Icons className={`${iconCls}`} />
    </div>
  );
};

export default Icon;
