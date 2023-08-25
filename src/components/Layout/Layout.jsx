import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SearchBar from '../miniComponents/SearchBar'
import "./Layout.css"
import logo from "../../img/logo.png"
import PaginationRender from '../pagination/PaginationRender'
import { Link } from 'react-router-dom'
import { ELEMENTS_NAVIGATION } from '../../constans/constans'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout() {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }
  return (
    <>
      <div className="min-h-full blanco">
        <Disclosure as="nav" className=" blanco">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-21 logoImg"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {ELEMENTS_NAVIGATION.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={
                              () => {
                                ELEMENTS_NAVIGATION.forEach((item) => item.current = false)
                                item.current = true
                              }
                            }
                            className={classNames(
                              item.current
                                ? 'bg-zinc-800 text-white'
                                : 'negroText hover:bg-zinc-800 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className=" relative flex max-w-xs items-center rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {ELEMENTS_NAVIGATION.map((item) => (
                    <Disclosure.Button
                      onClick={
                        () => {
                          ELEMENTS_NAVIGATION.forEach((item) => item.current = false)
                          item.current = true
                        }
                      }
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-zinc-800 text-white' :
                          'negroText hover:bg-zinc-800 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-zinc-400 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-zinc-700">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-zinc-700">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-zinc-800 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="blanco">
          <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">
            <SearchBar />
          </div>
        </header>
        <main className='blanco'>
          <div className="mx-auto justify-center max-w-7xl py-6  sm:px-6 lg:px-8 flex flex-wrap blanco scrollWrap ">
            <Outlet />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8 ">
             <PaginationRender />
          </div>
        </main>
      </div>
    </>
  )
}
