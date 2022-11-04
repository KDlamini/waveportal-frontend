import React from 'react'
import parse from 'html-react-parser';

function Spinner({loadingText}) {
  return (
    <div className="spinner-container">
      <div className="spinner-box">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {loadingText && <p>{parse(loadingText)}</p>}
      </div>
    </div>
  )
}

export default Spinner