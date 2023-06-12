import { BarStats } from "./BarStats"
import { pokemonsType } from '../types/types'
import { useSelector } from 'react-redux'
import { XMarkIcon } from '@heroicons/react/24/solid'

function ModalCard({ name, visible, handleOnModal, image, types, stats }) {
    let hp = 78
    console.log(stats);
    const currentPokemon = useSelector((state) => state.pokemonOnModal)
    //console.log(visible);
    console.log(currentPokemon);
    const colores = [
        "bg-green-600",
        "bg-red-600",
        "bg-blue-600",
        "bg-orange-600",
        "bg-cyan-600",
        "bg-pink-600",
    ]
    return (
        // <dialog className={`${visible ? 'flex backdrop:bg-red-600' : 'hidden'}  `}>

        // </dialog>
        < div
            className={`${visible ? 'fixed top-0 right-0 w-full h-full z-10 bg-gray-800/90 flex justify-center items-center transition duration-150 ease-out' : 'hidden'}`}
            onClick={handleOnModal}
        >
            <div className="bg-violet-900 w-5/6 lg:w-2/5 lg:h-5/6 flex flex-col p-4 rounded-lg">
                <div className="flex justify-between items-center ">
                    <h2 className="text-violet-50 first-letter:uppercase text-center font-bold text-lg">
                        {name}
                    </h2>
                    <XMarkIcon className={`fill-violet-50 cursor-pointer h-4 w-4 sm:h-5 sm:w-5   duration-500  text-violet-50 lg:hover:fill-violet-600  cursor-pointer'}`}
                        stroke='currentColor'
                        strokeWidth={1.5}
                        onClick={handleOnModal}
                    />
                </div>
                <img src={image} alt="" className="w-80 self-center drop-shadow-[0px_0px_20px_#000] " />
                <p className='text-violet-200 mt-4 sm:mt-6 text-xs sm:text-base font-medium self-start mb-2 sm:mb-4 first-letter:uppercase'>{types}</p>
                <div className="grid max-sm:grid-cols-1 grid-cols-2 border border-violet-500 px-4 pt-4 pb-0.5  rounded-lg mt-1 gap-x-8" >
                    {
                        stats.map((stat, index) => {
                            return (
                                <BarStats name={stat.stat.name} hp={stat.base_stat} color={colores[index]} />
                            )
                        })
                    }
                </ div>
            </div >

        </div >

    )
}

export { ModalCard }