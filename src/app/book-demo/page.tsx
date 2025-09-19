
import BookDemoForm from "@/app/book-demo/DemoForm";
import 'react-toastify/dist/ReactToastify.css';
import TestimonialCarousel from "./TestimonialCarousel";
import Script from "next/script";
import { Suspense } from "react";

export default function BookDemoPage() {

    return (
        <main id="bookDemo" className="bg-white w-full min-h-screen">

            <div className="grid h-screen lg:grid-cols-2 ">
                <div className="border-r lg:py-32 bg-gray-100  py-10  md:px-0 px-5 text-center  h-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        <BookDemoForm />
                    </Suspense>
                </div>
                <div className="grid px-10 py-10 items-center justify-center">
                    <TestimonialCarousel />
                </div>
            </div>


        </main >
    )
}
