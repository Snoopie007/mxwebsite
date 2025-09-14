import Image from "next/image"
import { MDXComponents as MDXComponentsType } from 'mdx/types'

type ImageProps = {
    src: string,
    alt: string,
    priority?: string,
}

export function MDXImage({ src, alt, priority }: ImageProps) {

    const prty = priority ? true : false

    return (

        <div className="w-full h-full">
            <Image
                className="w-full"
                src={`https://raw.githubusercontent.com/Snoopie007/monstro-blog/main/images/${src}`}
                alt={alt}
                width={850}
                height={850}
                priority={prty}
            />
        </div>
    )
}



type VideoProps = {
    id: string,
    title: string
}

export function MDXVideo({ id, title }: VideoProps) {


    return (

        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

        </div>
    )
}

export const MDXComponents: MDXComponentsType = {
    img: MDXImage,
    Image: MDXImage,
    Video: MDXVideo,
    // Add more custom components as needed
    h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mb-3 border-b border-gray-200 pb-2" {...props} />,
    h3: (props) => <h3 className="text-xl font-semibold mb-2" {...props} />,
    p: (props) => <p className="mb-4 leading-7" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
    li: (props) => <li className="mb-1" {...props} />,
    a: (props) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
    code: (props) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props} />,
    pre: (props) => <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4" {...props} />,
}