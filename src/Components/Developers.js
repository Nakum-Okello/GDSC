import React from 'react';
import './Developers.css';

function Developers() {
  return (
    <div className="developers-container">
      <h1>Google Developers Videos</h1>
      <div className="video-grid">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UGE13GR9_CU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kNGIspf4SZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/R0bEkyUlAAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eU4PcF3RvKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </div>
    </div>
  );
}

export default Developers;
