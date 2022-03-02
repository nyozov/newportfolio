import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import update from 'react-addons-update'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import navChange from '../hooks/navChange'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({navigation, setNavigation, lightMode, setLightMode}) {


  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800" >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-800 hover:bg-gray-200 hover:text-gray-800 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href}
                        key={item.name}
                       onClick={()=>navChange(item, navigation, setNavigation)}
                         
                        
                    
                        className={classNames(
                          item.current ? 'bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white' : 'text-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button onClick={()=> {
                lightMode === 'dark' ? setLightMode('') : setLightMode('dark')
              }} className="dark:bg-gray-800 bg-white dark:hover:bg-gray-900 hover:bg-gray-200 dark:text-gray-200 text-gray-600 font-bold py-2 px-4 border dark:border-gray-700 rounded">
                {lightMode === 'dark' ? <LightModeIcon sx={{width:'0.8em'}}/> : <DarkModeIcon sx={{width:'0.8em'}}/> }
                
</button>

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
              
                  key={item.name}
                  as="a"
                  to={item.href}
                  onClick={()=>navChange(item, navigation, setNavigation)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}