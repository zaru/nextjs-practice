import { parsedQs, parseNestedFormData } from "@/app/form/nested/submitAction";

export default function Page() {
  return (
    <>
      <form action={parsedQs}>
        <input type="text" name="user[name]" />
        <input type="text" name="user[articles_attributes][0][title]" />
        <input type="text" name="user[articles_attributes][1][title]" />
        <button type="submit">Submit</button>
      </form>
      <form action={parsedQs}>
        <input type="text" name="name" defaultValue="name" />
        <input type="text" name="user[name]" defaultValue="user name" />
        <input type="text" name="user[email]" defaultValue="user@example.com" />
        <input type="text" name="colors[]" defaultValue="red" />
        <input type="text" name="colors[]" defaultValue="green" />
        <input type="text" name="colors[]" defaultValue="blue" />
        <input type="text" name="posts[0][title]" defaultValue="0 title" />
        <input type="text" name="posts[0][content]" defaultValue="0 content" />
        <input type="text" name="posts[1][title]" defaultValue="1 title" />
        <input type="text" name="posts[1][content]" defaultValue="1 content" />
        <button type="submit">Submit</button>
      </form>

      <form action={parseNestedFormData}>
        <input type="text" name="name" defaultValue="name" />
        <input type="text" name="user.name" defaultValue="user name" />
        <input type="text" name="user.email" defaultValue="user@example.com" />
        <input type="text" name="colors[]" defaultValue="red" />
        <input type="text" name="colors[]" defaultValue="green" />
        <input type="text" name="colors[]" defaultValue="blue" />
        <input type="text" name="user.posts[0].title" defaultValue="0 title" />
        <input
          type="text"
          name="user.posts[0].content"
          defaultValue="0 content"
        />
        <input type="text" name="posts[1].title" defaultValue="1 title" />
        <input type="text" name="posts[1].content" defaultValue="1 content" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
