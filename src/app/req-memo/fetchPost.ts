export type PostType = {
  id: string;
  title: string;
  content: string;
};

export async function fetchPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await res.json();
  return post as PostType;
}
