import Navbar from "/src/components/navbar.js";
import { getAbout } from "/src/utils.js";

export default async function About() {
  const content = await getAbout();

  return (
    <main>
      <Navbar />
      <h1 className="text-2xl text-center my-5">{content.fields.title}</h1>
      <div className="flex flex-row m-5">
        <img
          src={content.fields.pfp.fields.file.url}
          alt="pfp"
          className="sticky w-20 grow order-last top-0 self-start"
        />

        <p className="mx-5">{content.fields.body}</p>
      </div>
    </main>
  );
}
