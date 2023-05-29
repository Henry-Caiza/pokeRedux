import { Searcher } from './Searcher'
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header className='w-full flex flex-col gap-6 items-center'>
            <img className='w-64' src={logo} alt="" />
            <Searcher />
        </header>
    )
}

export { Header }