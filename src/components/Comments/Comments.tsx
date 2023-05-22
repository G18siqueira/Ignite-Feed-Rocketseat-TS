import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";

import styles from "./comments.module.scss";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  comment: string;
  onDeleteComment: (commentToDelete: string) => void;
}

const Comments = ({ comment, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(comment);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles["comment"]}>
      <Avatar
        src={"https://avatars.githubusercontent.com/u/22178998?v=4"}
        hasBorder={false}
        alt="image avatar"
      />

      <div className={styles["box"]}>
        <div className={styles["content"]}>
          <header>
            <div className={styles["author"]}>
              <h2>Gustavo Siqueira</h2>
              <time
                className={styles["published"]}
                title="20 de maio às 17:36"
                dateTime="20/05/2023 17:36"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <RiDeleteBin6Line />
            </button>
          </header>

          <div className={styles["text"]}>
            <p>{comment}</p>
          </div>
        </div>
        <div className={styles["like"]}>
          <button onClick={handleLikeComment}>
            <AiOutlineLike />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
