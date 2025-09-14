
import { getPostByName } from "@/libs/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function LegalPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const page = await getPostByName(params.slug, "legal");
    if (!page) {
        return notFound()
    }
    return (
        <main id={"page"} className={"py-20 "}>
            <div className={"max-w-7xl grid grid-cols-3 m-auto"}>
                <article className={"col-span-2"}>

                    <div className='content'>
                        <h1>{page.meta.title}</h1>
                        <div className=' prose  max-w-full 
                        prose-li:text-base  
                        prose-a:text-base prose-p:text-base prose-p:leading-7 
                        prose-headings:my-2  prose-headings:text-base
                        prose-h1:text-2xl prose-h2:text-2xl prose-h3:text-xl
                        prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h2:mb-2
                        '>

                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3 border-b border-gray-200 pb-2">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
                                    p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
                                    ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
                                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
                                    li: ({ children }) => <li className="mb-1">{children}</li>,
                                    a: ({ href, children }) => <a href={href} className="text-blue-600 hover:text-blue-800 underline">{children}</a>,
                                    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
                                    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
                                    pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4">{children}</pre>,
                                }}
                            >
                                {page.content}
                            </ReactMarkdown>

                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

