import { getShowcase } from "/src/utils.js";

export default async function Showcase({ params }) {
    const showcase = await getShowcase(params.id);

    return (
        <main>
            <div className="flex flex-col min-h-screen justify-items m-5">
                <h1 className="text-4xl">{showcase.fields.title}</h1>
                <hr className="border-slate-600 my-5"/>
                <div className="flex flex-row">
                    <div>
                        <img src={showcase.fields.coverPhoto.fields.file.url} alt="Cover Photo" />
                    </div>
                    <div>
                        <p className="">{showcase.fields.description}</p>
                    </div>
                    <div>
                        {showcase.fields.comments.map((comment, i) => (
                            <p key={i}>{comment}</p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}