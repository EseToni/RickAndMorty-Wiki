import React, { useState, useRef, useEffect } from 'react';
import './HorizontalScroll.css';

function HorizontalScroll() {
  const totalPages = 42;
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const pageWidth = containerWidth / totalPages;
      const centeredPage = Math.floor((scrollPosition + containerWidth / 2) / pageWidth) + 1;
      setCurrentPage(centeredPage);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      setContainerWidth(containerRef.current.offsetWidth);
      const initialScroll = (containerRef.current.offsetWidth / totalPages) * Math.floor(totalPages / 2);
      containerRef.current.scrollLeft = initialScroll;
      setCurrentPage(Math.floor(totalPages / 2) + 1);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(Math.floor(totalPages / 2) + 1);

  return (
    <div className="horizontal-scroll" ref={containerRef}>
      <div className="menu-container">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index + 1}
            className={`menu-item ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {console.log(currentPage)}
    </div>
  );
}

export default HorizontalScroll;
