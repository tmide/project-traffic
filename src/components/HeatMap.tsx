/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeatMap = () => {
  return (
    <div className='bg-card border-2 lg:h-80 border-card-outline rounded-xl w-full overflow-hidden p-4'>
        <div className='flex flex-col gap-2 items-center text-secondary'>
            <span className='text-lg font-bold'>Traffic Heatmap</span>
            <img src="/hmap.svg" alt="Heatmap" />
            <div>
                <div className='flex items-center text-xs font-semibold gap-5 pb-1 border-b-2 border-card-outline'>
                    <div className="size-4 bg-red-500" />
                    <span>High Traffic | West Road</span>
                    <span>95%</span>
                </div>
                <div className='flex items-center text-xs pt-2 font-semibold justify-between'>
                    <div className="size-4 bg-yellow-500" />
                    <span>Medium Traffic | West Road</span>
                    <span>95%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeatMap