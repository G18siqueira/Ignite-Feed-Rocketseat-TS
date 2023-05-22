import { ImgHTMLAttributes } from "react";
import styles from "./avatar.module.scss";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}
const Avatar = ({hasBorder = true, ...props }: AvatarProps) => {
  return (
    <div className={hasBorder ? styles["avatarWithBorder"] : styles["avatar"]}>
      <img {...props} />
    </div>
  );
};

export default Avatar;
