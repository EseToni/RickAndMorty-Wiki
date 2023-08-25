import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"; // Importa los estilos CSS
import { useDispatch } from "react-redux";
import { onChangePage } from "../../redux/actions";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const dispatch = useDispatch()

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const pageChange = (data) => {
    const newPageNumber = data.selected + 1;
    updatePageNumber(newPageNumber);
    dispatch(onChangePage(newPageNumber)); // Envio al estado la nueva pagina
  };

  return (
    <div className="pagination">
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 2 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        previousLabel=""
        nextLabel=""
        className="pagination justify-content-center my-4 gap-4"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item" // Establece la clase para los cuadros que rodean los números
        pageLinkClassName="page-link"
      />
    </div>
  );
};

export default Pagination;
