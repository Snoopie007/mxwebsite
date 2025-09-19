import React from 'react'

export default function DisqualifyPage() {
    return (
        <main className="bg-white w-full">

            <div className="max-w-2xl py-10 flex justify-center items-center flex-col text-center m-auto">
                <h2 className="text-4xl mb-2">Unfortunately we currently only have solutions for local businesses with group classes.</h2>
                <p className="text-xl leading-8 mt-4">
                    If you have a local business with group classes that doesn’t appear on this list, please click here to submit a message
                </p>
                <div className=' px-4 shadow-sm'>
                    <iframe
                        src="https://api.mymonstro.com/widget/form/DePmn7LD90wNdzNQlv5r"
                        className='w-[600px]'
                        id="inline-DePmn7LD90wNdzNQlv5r"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Disqualify Form"

                        data-layout-iframe-id="inline-DePmn7LD90wNdzNQlv5r"
                        data-form-id="DePmn7LD90wNdzNQlv5r"
                        title="Disqualify Form"
                    >
                    </iframe>
                    <script src="https://api.mymonstro.com/js/form_embed.js"></script>

                </div>
            </div>
        </main >
    )
}
