import React from 'react';

function ButtonDelete({id, onDelete}) {
     return (
          <button className='note-item__button-delete' onClick={() => onDelete(id)} >
               Hapus
          </button>
     );
}

export default ButtonDelete;