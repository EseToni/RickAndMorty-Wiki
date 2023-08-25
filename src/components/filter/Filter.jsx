import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import "./filter.css"
import { filterStatus, filterGender,filterSpecie } from "../../redux/actionsFilters"
import { INPUTS_FILTER_STATUS, INPUTS_FILTER_GENDER, INPUTS_FILTER_SPECIES } from "../../constans/constans"
import FilterComponent from "./filterComponent"
import {AiOutlineClear} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { filterClear } from "../../redux/actionsFilters"
import { useState } from "react"

export default function Filter() {
  const dispatch = useDispatch()
  const statusState = useSelector((state) => state.reducer.statusString)
  const genderState = useSelector((state) => state.reducer.genderString)
  const specieState = useSelector((state) => state.reducer.specieString)
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    dispatch(filterClear())
    setIconClicked(true);
    setTimeout(() => {
      setIconClicked(false);
    }, 2000); // Después de 2 segundos, se restablece el estado
  };

  return (
    <div className="filterContainer">
      
      <Disclosure >
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
          <div className="headerIconClear">
          <AiOutlineClear
                className={`iconClear ${iconClicked ? 'clicked' : ''}`}
                onClick={handleIconClick}
              />
            <Disclosure.Button className="filters">
              <h1>Filters</h1>
              <ChevronRightIcon className={open ? 'rotate-90 transform iconFilter' : '' + "iconFilter"} />
              
            </Disclosure.Button >
            </div>
            <Disclosure.Panel className="clearFilterContainer">
              <FilterComponent
                type={"Status"}
                arrayInputs={INPUTS_FILTER_STATUS}
                actionFilter={filterStatus}
                filterState={statusState}
              />
              <FilterComponent
                type={"Gender"}
                arrayInputs={INPUTS_FILTER_GENDER}
                actionFilter={filterGender}
                filterState={genderState}
              />
              <FilterComponent
              type={"Specie"}
              arrayInputs={INPUTS_FILTER_SPECIES}
              actionFilter={filterSpecie}
              filterState={specieState}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
