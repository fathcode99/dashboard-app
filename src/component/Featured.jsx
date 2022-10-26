import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
    return (
        <div className='flex flex-col justify-between flex-[2_2_0%] p-3 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] rounded-md'>
            <div className='top flex justify-between items-center w-full'>
                <div className='text-lg font-semibold'>Total Revenue</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
            </div>
            <div className="bottom flex flex-col items-center h-72 gap-3">
                <div className="featuredChart h-32 w-32 mt-4">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={10}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathColor: `#8100fd`,
                            textColor: '#8100fd',
                            trailColor: '#cecece',
                        })}
                        className="font-bold"
                        />
                </div>
                <div>
                    <p className='text-center text-xl font-bold'>Total sales made today</p>
                    <p className='text-center font-bold text-green-600'>$233</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, blanditiis!</p>
                </div>
            </div>
        </div>
    )
}

export default Featured