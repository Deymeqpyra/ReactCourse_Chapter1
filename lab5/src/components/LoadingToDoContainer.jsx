import React from 'react';
import  './ToDoContainer.css';
const LoadingToDoContainer = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
           <div className='loadingIcon'><div></div><div></div><div></div><div></div></div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingToDoContainer;