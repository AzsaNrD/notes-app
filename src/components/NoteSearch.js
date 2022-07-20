import React from 'react';

function NoteSearch({onSearchChange, searchTitle }) {
     return (
          <input type='search' placeholder='Cari Catatan ...' value={searchTitle} onChange={(event) => onSearchChange(event)} />
     );
}

export default NoteSearch;