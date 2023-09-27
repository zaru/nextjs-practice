// これはServerComponentにならず、ブラウザ側でfetchされてしまう
export default async function ServerComponent() {
  const res = await fetch(`http://localhost:3000/api/posts/1`);
  const post = await res.json();
  return (
    <div>
      <h1>ServerComponent</h1>
      <p>{post.title}</p>
    </div>
  );
}
