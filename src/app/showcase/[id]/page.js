import Link from "next/link";

import Navbar from "/src/components/navbar.js";
import { getShowcase } from "/src/utils.js";

export default async function Showcase({ params }) {
    const showcase = await getShowcase(params.id);

    return (
        <main className="flex flex-row min-h-screen">
            <img src={showcase.fields.coverPhoto.fields.file.url} alt="Cover Photo" className="flex sticky order-last grow h-screen top-0"/>
            <div className="flex flex-col shrink align-items-center m-5">
                <Navbar />
                <h1 className="text-4xl">{showcase.fields.title}</h1>
                <hr className="border-slate-600 my-5"/>
                <div>
                    <p className="">{showcase.fields.description}</p>
                </div>
                <div>
                    {showcase.fields.comments.map((comment, i) => (
                        <p key={i}>{comment}</p>
                    ))}
                </div>
            </div>
            {/* <Link>
                Link to Publication
            </Link> */}
        </main>
    )
}