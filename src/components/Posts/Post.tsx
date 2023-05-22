import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import Avatar from "../Avatar/Avatar";
import Comments from "../Comments/Comments";
import styles from "./post.module.scss";

interface Author{
  name: string;
  avatar_url: string;
  role: string;
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostProps{
  author: Author
  publishedAt: Date;
  content: Content[];
}

const Post = ({ author, publishedAt, content }:PostProps) => {
  const [comments, setComments] = useState(['']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      console.log("comment: ", comment);
      console.log("commentToDelete: ", commentToDelete);

      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles["post"]}>
      {/* Header */}
      <header className={styles["header"]}>
        <div className={styles["author"]}>
          <Avatar src={author.avatar_url} />
          <div className={styles["author-info"]}>
            <h2 className={styles["name"]}>{author.name}</h2>
            <p className={styles["role"]}>{author.role}</p>
          </div>
        </div>

        <time
          className={styles["published"]}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles["content"]}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles["commentForm"]}>
        <h2>Deixe seu feedback</h2>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <div className={styles["commentForm-button"]}>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </div>
      </form>

      <div className={styles["commentList"]}>
        {comments.map((comment) => {
          return (
            <Comments
              key={comment}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
