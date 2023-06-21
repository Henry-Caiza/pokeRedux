import { HeartIcon } from '@heroicons/react/24/solid'

import { useDispatch } from 'react-redux'
import { setFavorite, setOpenModalCard } from '../slices/dataSlice'
import { ModalCard } from './ModalCard'
import { useState } from 'react'

function PokemonCard({ name, image, types, id, isFavorite, stats }) {

    const dispatch = useDispatch()
    const typeString = types.map(elem => elem.type.name).join(' - ')
    const a = typeString.split(' ')
    // console.log(a);
    const [visible, setVisible] = useState(false)

    const handleOnFavorite = () => {

        dispatch(setFavorite({ pokemonId: id }))
        //console.log(name);
    }

    const handleOnModal = () => {
        dispatch(setOpenModalCard(id))
        setVisible(!visible)
    }


    return (
        <div className="bg-gradient-to-b  from-violet-950 to-violet-900 border flex flex-col items-center relative border-violet-800 rounded-md sm:rounded-xl p-3" >
            <div className=' bg-violet-600 w-5/6 py-1 px-1 sm:px-3 rounded-full absolute -top-3'>
                <h2 className=' text-violet-50 first-letter:uppercase text-center font-semibold text-xs lg:text-sm xl:text-base'>{name}</h2>
            </div>
            <img src={image} alt={name}
                className='mt-4 sm:mt-8 duration-300 hover:scale-110 hover:drop-shadow-[0px_0px_10px_#000] sm:cursor-pointer'
                onClick={handleOnModal} />
            <p className='text-violet-200 w-full pt-2 mt-4 sm:mt-6 text-xs sm:text-sm font-light self-start mb-2 sm:mb-4 first-letter:uppercase border-t border-violet-600/40'>{typeString}</p>
            <button className={`absolute flex justify-center items-center bg-violet-600 h-6 w-6 sm:h-8 sm:w-8 rounded-full -bottom-3 sm:-bottom-4`}
            >
                <HeartIcon className={`${!isFavorite ? 'h-4 w-4 sm:h-5 sm:w-5   text-violet-50 lg:hover:fill-violet-50 cursor-pointer'
                    : 'h-4 w-4 sm:h-5 sm:w-5   duration-500  text-violet-50 lg:hover:fill-violet-600  cursor-pointer'}`}
                    fill={`${isFavorite ? 'white' : 'none'}`}
                    stroke='currentColor'
                    strokeWidth={1.5}
                    onClick={handleOnFavorite}
                ></HeartIcon>
            </button>
            <ModalCard handleOnModal={handleOnModal} visible={visible} name={name} image={image} types={typeString} stats={stats} />
        </div>
    )
}

export { PokemonCard }

