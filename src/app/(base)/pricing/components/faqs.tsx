
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'


function Faq({ faqs }: { faqs: { q: string, a: string }[] }) {
    return (
        <section>
            <div className="max-w-6xl mx-auto py-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                </div>
                <div className='md:w-3/5 m-auto flex flex-col gap-4'>
                    {faqs.map((v, i) => (
                        <Collapsible key={i} className='rounded-xl border p-4 bg-slate-100'>
                            <CollapsibleTrigger asChild>
                                <div className='flex font-bold cursor-pointer px-6 text-xl items-center justify-between'>
                                    {v.q}
                                    <ChevronsUpDown className="h-5 w-5 cursor-pointer" />
                                    <span className="sr-only">Toggle</span>
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className='py-5 px-6 text-lg'>
                                <div className="prose prose-p:text-base" dangerouslySetInnerHTML={{ __html: v.a }}>

                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Faq