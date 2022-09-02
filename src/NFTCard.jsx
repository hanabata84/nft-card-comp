import React from 'react'
import equilibriumImg from './assets/equilibrium-card.png'
import avatar from './assets/avatar.png'
import clockIcon from './assets/icon-clock.svg'
import ethIcon from './assets/icon-ethereum.svg'
import viewIcon from './assets/icon-view.png'

const NFTCard = () => {
    return (
        <div className='relative w-[352px] h-[585px] bg-[#15273F] rounded-2xl shadow-outer2xl flex flex-col justify-center items-center'>
            <div className=' group hover:cursor-pointer hover:bg-[#00FFF8] w-[300px] h-[300px] mt-5 rounded-[10px]'>
                <img className='group-hover:opacity-50' src={equilibriumImg} alt="/" />
                <div className='opacity-0 group-hover:opacity-100 absolute top-[25%] left-[150px]'>
                    <img src={viewIcon} alt="/" />
                </div>
            </div>
            <div className=' m-7'>
                <h1 className='text-white text-xl font-bold hover:text-[#00FFF8] hover:cursor-pointer'>Equilibrium #3429</h1>
                <p className='text-[#9CB1CB] my-5'>Our Equilibrium collection promotes balance and calm.</p>
                <div className='flex justify-between mb-4'>
                    <div className='flex'>
                        <img className='object-contain' src={ethIcon} alt="/" />
                        <span className='text-[#00FFF8] font-bold pl-2'>0.041 ETH</span>
                    </div>
                    <div className='flex'>
                        <img className='object-contain' src={clockIcon} alt="/" />
                        <span className='text-[#9CB1CB] pl-2'>3 days left</span>
                    </div>
                </div>
                <div className='flex items-center border-t border-[#3F516A] pt-4'>
                    <img src={avatar} alt="/" />
                    <p className='text-[#9CB1CB] text-sm pl-4'>Creation of <span className='text-white hover:text-[#00FFF8] hover:cursor-pointer'>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    )
}

export default NFTCard