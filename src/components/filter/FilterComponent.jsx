import React from 'react'
import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDispatch} from "react-redux"
import "./filterComponent.css"

export default function FilterComponent({ arrayInputs, actionFilter, type, filterState }) {
    const dispatch = useDispatch()
    const handleCheckedBoxChange = (statusKey) => {
        if (filterState === statusKey) {
            // Si ya estaba activo, desactívalo
            dispatch(actionFilter("")); // Limpia el filtro en el estado
        }
        else {
            dispatch(actionFilter(statusKey)); // Aplica el filtro en el estado
        }
    }
    window.addEventListener('load', () => {
        const scrollContainer = document.querySelector('.inputBody');
        if (scrollContainer) {
          scrollContainer.scrollTop = 0;
        }
      });
    return (
        <main className='mainFilter'>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className={"filterBody"}>
                            <div className={open ? "filterHeaderOpen" : "filterHeader"}>
                                <h1 className={open ? "filterTextOpen" : "filterText"}>{type}</h1>
                                <ChevronRightIcon className={open ? 'rotate-90 transform iconFilter iconRightFilter iconFilterOpen' : '' + "iconFilter iconRightFilter"} />
                            </div>
                            <Disclosure.Panel as="div" >
                                <label htmlFor="status" onClick={(e) => e.stopPropagation()} className="inputBody" >
                                    {arrayInputs.map((item, index) => (
                                        <label htmlFor={item.name} key={item.name + index}>
                                            <input
                                                type="checkbox"
                                                value={item.name}
                                                id={item.name}
                                                className="inputFilter"
                                                style={{ display: "none" }}
                                                onChange={() => handleCheckedBoxChange(item.name)}
                                                checked={filterState === item.name}
                                            />
                                            <span className="textWrapped">{item.name}</span>
                                        </label>
                                    ))}
                                </label>
                            </Disclosure.Panel>
                        </Disclosure.Button>
                    </>
                )}
            </Disclosure>
        </main>
    )
}
