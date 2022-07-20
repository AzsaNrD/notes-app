import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NoteList({ data, ns, onDelete, onArchive, searchedNote, searchTitle }) {
     let activeNotes = null;
     let archiveNotes = null;
     if (searchTitle.length > 0) {
          activeNotes = searchedNote.filter((value) => value.archived === false);
          archiveNotes = searchedNote.filter((value) => value.archived === true);
     } else {
          activeNotes = data.filter((value) => value.archived === false);
          archiveNotes = data.filter((value) => value.archived === true);
     }
     
     return (
          <div className='note-list'>
               {ns === 'active'
                    ?
                    activeNotes.length > 0
                         ?
                         activeNotes.map((value) => (
                              <NoteItem
                                   key={value.id}
                                   id={value.id}
                                   onDelete={onDelete}
                                   onArchive={onArchive}
                                   {...value}
                              />
                         ))
                         :
                         <EmptyMessage />
                    :
                    archiveNotes.length > 0
                         ?
                         archiveNotes.map((value) => (
                              <NoteItem
                                   key={value.id}
                                   id={value.id}
                                   onDelete={onDelete}
                                   onArchive={onArchive}
                                   {...value}
                              />
                         ))
                         :
                         <EmptyMessage />
               }

          </div>
     );
}

export default NoteList;