import React from 'react'
import ContactForm from './components/ContactForm'

function ContactPage() {
    return (
        <main className=''>
            <section className='max-w-7xl m-auto pt-16 pb-4'>
                <div className='text-center space-y-1'>
                    <h1 className='text-2xl font-bold'>Contact Us</h1>
                    <p className=' text-muted-foreground'>Need help? Reach out to us.</p>
                </div>
            </section>
            <section>
                <div className='max-w-xl  pb-20 m-auto'>
                    <div className='border border-gray-200 rounded-sm shadow-sm pt-2 pb-10'>


                        <ContactForm />

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactPage