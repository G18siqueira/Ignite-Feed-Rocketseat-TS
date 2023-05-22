import Post, { PostProps } from "./Post";
import styles from "./posts.module.scss";

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/22178998?v=4",
      name: "Gustavo Siqueira",
      role: "Front-end Developer",
    },
    publishedAt: new Date("2023-05-20 17:36:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 devonlane.design" },
    ],
  },
  {
    id: 2,
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/63889819?v=4",
      name: "Naomi Matsura",
      role: "Farmacêutica",
    },
    publishedAt: new Date("2023-05-21 17:36:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "" },
    ],
  },
];

const Posts = () => {
  return (
    <section className={styles["posts"]}>
      {posts.map(({ id, author, publishedAt, content }) => {
        return (
          <Post
            key={id}
            author={author}
            publishedAt={publishedAt}
            content={content}
          />
        );
      })}
    </section>
  );
};

export default Posts;
