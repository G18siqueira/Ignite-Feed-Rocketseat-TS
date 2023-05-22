import styles from "./avatar.module.scss";
interface AvatarProps{
  hasBorder?: boolean;
  src: string;
  alt?: string;
}
const Avatar = ({ src, hasBorder = true, alt }: AvatarProps) => {
  return (
    <div className={hasBorder ? styles["avatarWithBorder"] : styles["avatar"]}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
