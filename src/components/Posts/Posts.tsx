import Post, { PostType } from "./Post";
import styles from "./posts.module.scss";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Gustavo Siqueira",
      avatar_url: "https://avatars.githubusercontent.com/u/22178998?v=4",
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
      name: "Naomi Matsura",
      avatar_url: "https://avatars.githubusercontent.com/u/63889819?v=4",
      role: "Farmacêutica",
    },
    publishedAt: new Date("2023-05-21 17:36:00"),
    content: [
      { type: "paragraph", content: "Fala pessoal, Tudo bem? 👋" },
      { type: "link", content: "" },
    ],
  },
];

const Posts = () => {
  return (
    <section className={styles["posts"]}>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
          />
        );
      })}
    </section>
  );
};

export default Posts;
