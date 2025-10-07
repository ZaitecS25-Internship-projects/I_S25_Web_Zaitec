import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'



export default function Header() {



  return (
    <>
      <header>
        <div className="relative flex justify-center items-center bg-[url('/img/header-zaitec.jpg')] bg-no-repeat bg-cover h-100">
          <div className='absolute inset-0 bg-black/70'></div>
          <div className='flex-1 z-10 '>
            <h1 className="text-7xl text-white text-center pl-30 font-bold ">Proyecto Zaitec</h1>
          </div>
          <nav className='flex flex-col gap-4 items-end pt-5 pr-10 z-10 h-full'>
            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-4 text-shadow-gray-500 text-shadow-lg'
            >
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'text-white text-lg font-bold  ' : 'text-amber-50 font-bold text-lg')}> Inicio </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              whileTap={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=' bg-amber-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl px-4 text-shadow-gray-500 text-shadow-lg'

            >
              <NavLink
                to={'/contacto'}
                className={({ isActive }) => (isActive ? 'text-white text-lg font-bold ' : 'text-amber-50 font-bold text-lg')}> Contacto </NavLink>
            </motion.div>

          </nav>
        </div>
      </header>
    </>

  )
}
