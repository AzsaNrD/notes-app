import React from 'react';

class NoteInput extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               title: '',
               body: '',
          }

          this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
          this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
          this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
     }

     onTitleChangeHandler(event) {
          const limitChar = 50;
          this.setState((prevState) => {
               return {
                    ...prevState,
                    title: event.target.value.slice(0, limitChar)
               }
          });
     }

     onBodyChangeHandler(event) {
          this.setState((prevState) => {
               return {
                    ...prevState,
                    body: event.target.value
               }
          });
     }

     onSubmitEventHandler(event) {
          event.preventDefault();
          this.props.addNote(this.state);
     }

     render() {
          return (
               <div className='note-input'>
                    <h2>Buat Catatan</h2>
                    <form onSubmit={this.onSubmitEventHandler}>
                         <p className='note-input__char-limit'>Sisa Karakter : {50 - this.state.title.length}</p>
                         <input type='text' placeholder='Masukkan judul ...' value={this.state.title} onChange={this.onTitleChangeHandler} required />
                         <textarea type='text' placeholder='Tuliskan catatanmu di sini ...' value={this.state.body} onChange={this.onBodyChangeHandler} required />
                         <button type='submit'>Buat</button>
                    </form>
               </div>
          );
     }
}

export default NoteInput;