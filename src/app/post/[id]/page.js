import Link from "next/link";

import { getPost } from "/src/utils.js";

export default async function Post({ params }) {
    const post = await getPost(params.id);
    const authors = post.fields.authors;
    const body = post.fields.body.content;

    return (
        <main>
            <div className="flex flex-col min-h-screen m-5">
                <h1 className="text-4xl self-center">{post.fields.title}</h1>
                <div className="m-5">
                    <div>
                        {authors.map((author) => (
                            <Link href={author.fields.link} key={author.sys.id}>
                                <p>{author.fields.name}</p>
                            </Link>
                        ))}
                    </div>
                    <hr className="border-slate-600 mb-5"/>
                    <p className="italic">{post.fields.description}</p>
                    <div className="mt-5">
                        {body.map((paragraph, index) => (
                            <div key={index}>
                                {paragraph.content.map((text, index) => (
                                    <p key={index}>{text.value}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

