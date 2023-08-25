import { useState } from "react";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PaginationRender = () => {
  const [pageNumber, setPageNumber] = useState(1); // Estado para el número de página actual
  const location = useLocation()
  const updatePageNumber = (newPageNumber) => {
    setPageNumber(newPageNumber);
    // Aquí puedes realizar acciones adicionales al cambiar de página si es necesario
  };
  const params = useParams()
  const setPages = useSelector((state) => state.reducer.pages) || 1
  const lastPathLocation = useSelector((state) => state.secondReducer.lastPathsLocation)
  const lastPage = lastPathLocation[lastPathLocation.length -2]
  const info = {
    pages: setPages, // Número total de páginas
    // ... otros datos de paginación
  };
  const customStyles = {
    backgroundColor: 'rgb(39, 39, 42)',
    color: 'white',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,",
    fontWeight: "600",
  };

  

  if (location.pathname === "/favorites" || location.pathname === `/characters/${params.id}`) {
    return (
      <Link to={lastPage}>
        <Button variant="contained" style={customStyles} className=' left-1/2'>Back</Button>
      </Link>
    )
  }

  return (
    <>
      <Pagination
        pageNumber={pageNumber}
        info={info}
        updatePageNumber={updatePageNumber}
      />
    </>
  );
};

export default PaginationRender;
