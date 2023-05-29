import { porcentaje } from '../utils'

function BarStats({ hp, color, name }) {

    // const b = color
    // console.log(typeof (b), b);
    // console.log(typeof (porcentaje(hp)), porcentaje(hp));
    return (
        <div className='grid grid-cols-2 gap-x-2 h-10 items-center'>
            <p className='self-start text-violet-300 text-sm font-medium first-letter:uppercase'>{name + ': '} <span className='font-normal'>{hp}</span></p>
            <div className={`w-24 h-4 bg-white mb-4 `} >
                <div className={`${color} ${porcentaje(hp)} h-full rounded-l-full}`} />
            </div>
        </div>

    )
}

export { BarStats }