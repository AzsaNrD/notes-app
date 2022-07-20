import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ data, onDelete, onArchive, addNote, searchedNote, searchTitle }) {
     return (
          <div className='note-app__body'>
               <NoteInput addNote={addNote} />

               <h2>Catatan Aktif</h2>
               <NoteList
                    data={data}
                    ns='active'
                    onDelete={onDelete}
                    onArchive={onArchive}
                    searchedNote={searchedNote}
                    searchTitle={searchTitle}
               />
               
               <h2>Catatan Arsip</h2>
               <NoteList
                    data={data}
                    ns='archive'
                    onDelete={onDelete}
                    onArchive={onArchive}
                    searchedNote={searchedNote}
                    searchTitle={searchTitle}
               />
          </div>
     );
}

export default NoteBody;