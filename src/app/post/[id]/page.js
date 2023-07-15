import { getPost } from "/src/utils.js";

export default async function Post({ params }) {
    const post = await getPost(params.id);

    return (
        <main>
            <div className="flex flex-col min-h-screen justify-items m-5">
                <h1 className="text-4xl">{post.fields.title}</h1>
                <hr className="border-slate-600 my-5"/>
                <p className="">{post.fields.description}</p>
            </div>
        </main>
    )
}

