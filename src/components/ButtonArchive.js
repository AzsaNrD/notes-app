import React from 'react';

function ButtonArchive({id, archived, onArchive}) {
     return (
          <button className='note-item__button-archive' onClick={() => onArchive(id)} >
               {archived ? "Pindahkan" : "Arsipkan"}
          </button>
     );
}

export default ButtonArchive;