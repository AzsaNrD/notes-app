import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               data: getInitialData(),
               searchTitle: '',
               searchedNote: []
          }

          this.onDeleteHandler = this.onDeleteHandler.bind(this);
          this.onArchiveHandler = this.onArchiveHandler.bind(this);
          this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
          this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
          this.onSearchHandler = this.onSearchHandler.bind(this);
     }

     onDeleteHandler(id) {
          const notes = this.state.data.filter(note => note.id !== id);
          this.setState({
               data: notes
          });
     }

     onArchiveHandler(id) {
          let notes = this.state.data.filter(note => note.id === id);
          notes[0].archived = !notes[0].archived;
          this.setState((prevState) => {
               return {
                    ...prevState
               }
          });
     }

     onAddNoteHandler({ title, body }) {
          this.setState((prevState) => {
               return {
                    data: [
                         ...prevState.data,
                         {
                              id: +new Date(),
                              title,
                              body,
                              createdAt: new Date(),
                              archived: false,
                         }
                    ]
               }
          });
     }

     onSearchChangeHandler(event) {
          this.setState((prevState) => {
               return {
                    ...prevState,
                    searchTitle: event.target.value
               }
          });
          this.onSearchHandler(event.target.value)
     }

     onSearchHandler(value) {
          const data = this.state.data;
          const searchTitle = this.state.searchTitle
          let searchedNote = data.filter((note) => note.title.toLowerCase().includes(value.toLowerCase()));
          if (searchTitle.length >= 0) {
               this.setState({ searchedNote: null });
               this.setState({ searchedNote: searchedNote });
          } else {
               this.setState({ searchedNote: null });
               this.setState({ searchedNote: data });
          }
     }

     render() {
          return (
               <div className='note-app'>
                    <NoteHeader
                         data={this.state.data}
                         onSearchChange={this.onSearchChangeHandler}
                         onSearched={this.state.searchTitle}
                         />
                    <NoteBody
                         data={this.state.data}
                         onDelete={this.onDeleteHandler}
                         onArchive={this.onArchiveHandler}
                         addNote={this.onAddNoteHandler}
                         searchTitle={this.state.searchTitle}
                         searchedNote={this.state.searchedNote}
                    />
               </div>
          );
     }
}

export default NoteApp;