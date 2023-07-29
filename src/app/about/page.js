import { getAbout } from "/src/utils.js";

export default async function About() {
  const content = await getAbout();

  return (
    <main>
      <div>
        <h1>{content.fields.title}</h1>

        <img src={content.fields.pfp.fields.file.url} alt="pfp" />

        <p>{content.fields.body}</p>
      </div>
    </main>
  );
}
