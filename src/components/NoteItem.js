import React from 'react';
import ButtonArchive from './ButtonArchive';
import ButtonDelete from './ButtonDelete';
import { showFormattedDate } from '../utils/index';

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive }) {
     return (
          <div className='note-item'>
               <div className='note-item__content'>
                    <h3>{title}</h3>
                    <p className='note-item__content__date'>{showFormattedDate(createdAt)}</p>
                    <p>{body}</p>
               </div>
               {archived
                    ?
                    ( <div className='note-item__action'>
                         <ButtonDelete id={id} onDelete={onDelete} />
                         <ButtonArchive id={id} archived={archived} onArchive={onArchive} />
                    </div>)
                    :
                    ( <div className='note-item__action'>
                         <ButtonDelete id={id} onDelete={onDelete} />
                         <ButtonArchive id={id} archived={archived} onArchive={onArchive} />
                    </div>)
               }
          </div>
     )
}

export default NoteItem;