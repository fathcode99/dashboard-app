import React from 'react'

const Featured = () => {
    return (
        <div className='flex justify-between flex-[2_2_0%] p-3 bg-white shadow-md rounded-md'>
            <div className='top flex justify-between items-center w-full'>
                <div className='text-lg font-semibold'>Total Revenue</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    
                </div>
            </div>
        </div>
    )
}

export default Featured