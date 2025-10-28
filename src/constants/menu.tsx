import BatteryFullIcon from "../assets/svg/battery-full.svg";
import BatteryChargeIcon from "../assets/svg/battery-charge.svg";
import BellOffIcon from "../assets/svg/bell-off.svg";
import BoxIcon from "../assets/svg/box.svg";
import BottleIcon from "../assets/svg/bottle.svg";
import BroomIcon from "../assets/svg/broom.svg";
import BuildingsIcon from "../assets/svg/buildings.svg";
import CameraIcon from "../assets/svg/camera.svg";
import { RouterLinks } from "./links";
import type { FC, SVGProps } from "react";

export interface ChildrenItem {
  label: string;
  link: RouterLinks;
}

export interface MenuItemType {
  label: string;
  link: RouterLinks;
  icon: FC<SVGProps<SVGSVGElement>>;
  children?: ChildrenItem[];
}

export const menu: MenuItemType[] = [
  { label: "item 1", link: RouterLinks.MenuItem1, icon: BatteryFullIcon },
  { label: "item 2", link: RouterLinks.MenuItem2, icon: BatteryChargeIcon },
  { label: "item 3", link: RouterLinks.MenuItem3, icon: BellOffIcon },
  {
    label: "item 4",
    link: RouterLinks.MenuItem4,
    icon: BottleIcon,
    children: [
      { label: "children 1", link: RouterLinks.ChildrenItem1 },
      {
        label: "children 2",
        link: RouterLinks.ChildrenItem2,
      },
      {
        label: "children 3",
        link: RouterLinks.ChildrenItem3,
      },
      {
        label: "children 4",
        link: RouterLinks.ChildrenItem4,
      },
    ],
  },
  { label: "item 5", link: RouterLinks.MenuItem5, icon: BoxIcon },
  { label: "item 6", link: RouterLinks.MenuItem6, icon: BroomIcon },
  { label: "item 7", link: RouterLinks.MenuItem7, icon: BuildingsIcon },
  { label: "item 8", link: RouterLinks.MenuItem8, icon: CameraIcon },
];
