import React from 'react'

const chat = () => {
    return (
        <div className="absolute">
            <div className="fixed bottom-16 right-16 rounded-full bg-red-500 h-20 w-20 flex items-center justify-center">
                icon
            </div>

            <div className='bg-gradient-to-r from-orange-300 to-blue-300 h-[600px] w-[400px] fixed bottom-24 right-20'>

                <div>
                    <p className='p-8 text-2xl font-mono '> ChatBot </p>

                    <div className='bg-black border-t'> </div>
                </div>

                <div className=' flex justify-center place-items-end '>
                    <input className="bg-slate-400 w-full mx-4 rounded-lg" type="text" />
                </div>

            </div>



        </div>
    )
}
export default chat;
