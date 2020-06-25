import React from 'react'
import Header from './Header'
import Folders from './Folders'
import Notes from './Notes'
import {Route, withRouter} from 'react-router-dom'
import AppContext from './AppContext'
import AddFolder from './AddFolder'
import AddNote from './AddNote'

class App extends React.Component{
  state = {
    currentFolder:null,
    currentNote:null,
    folders: [],
    notes: []
  }

  componentDidMount(){
    fetch(`http://localhost:9090/db`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        ...data,
        currentFolder:null,
        currentNote: null
      })
    })
  }

  //On Folder Click
  handleFolderSelect = (e) => {
    this.setState({
      currentFolder:e.target.id,
      currentNote:null
    })
    this.props.history.push(`/folders/${e.target.id}`)
  }

  //On Note Click
  handleNoteSelect = (e) => {
    this.setState({currentNote:e.currentTarget.id})
    this.props.history.push(`/notes/${e.currentTarget.id}`)
  }

  //On Header Click
  handleClickHeader= () => {
    this.setState({currentNote:null, currentFolder:null})
    this.props.history.push(`/`)
  }

  //On Back Click
  handleBackClick= () =>{
    this.setState({currentNote:null})
    this.props.history.goBack()
  }

  //On Delete Click
  handleDeleteClick = (e) =>{
    e.stopPropagation();
    const noteId=e.target.id;
    fetch(`http://localhost:9090/notes/${e.target.id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response=>response.json())
    .then(()=>{
      const newNotes=this.state.notes.filter(note => note.id !== noteId)
      console.log(newNotes);

      this.setState({
        notes: newNotes,
        currentNote:null,
      }, ()=> this.props.history.goBack())
    })
  }

  handleAddFolder= (e) =>{
    this.props.history.push('/addfolder')


  }

  handleAddNote = (e) => {
    this.props.history.push('/addnote')
  }

  render(){
    return (
      <AppContext.Provider value={{
        folders:this.state.folders,
        notes:this.state.notes,
        currentFolder:this.state.currentFolder,
        currentNote:this.state.currentNote,
        handleClickHeader: this.handleClickHeader,
        handleDeleteClick: this.handleDeleteClick,
        handleAddFolder: this.handleAddFolder,
        handleAddNote: this.handleAddNote
      }} >

        <div className='App'>
          <Header />
          <main>
            {/* Home Route */}
            <Route exact 
              path='/' 
              render={() => <Folders handleFolderSelect={this.handleFolderSelect}/>}
            />

            <Route
              exact
              path='/'
              render={() => <Notes currentFolder={this.state.currentFolder} handleNoteSelect={this.handleNoteSelect} currentNote={this.state.currentNote} notes={this.state.notes}/>}
            />
            

            {/* Folder Route */}
            <Route
              exact
              path='/folders/:folderId' 
              render={() => <Folders currentFolder={this.state.currentFolder} handleFolderSelect={this.handleFolderSelect}/>} 
            />

            <Route
              path='/folders/:folderId'
              render={() => <Notes currentFolder={this.state.currentFolder} handleNoteSelect={this.handleNoteSelect} currentNote={this.state.currentNote} notes={this.state.notes}/>}
            />

            {/* Note Route */}
            <Route
              exact
              path='/notes/:noteId' 
              render={(routeProps) => <Folders {...routeProps} handleBackClick={this.handleBackClick} handleFolderSelect={this.handleFolderSelect} />} 
            />

            <Route
              exact
              path='/notes/:noteId'
              render={() => <Notes currentFolder={this.state.currentFolder} handleNoteSelect={this.handleNoteSelect} currentNote={this.state.currentNote} notes={this.state.notes}/>}
            />

            {/* Add Folder Route */}
            <Route
              path='/addfolder'
              render={() => <AddFolder />}
            />

            {/* Add Note Route */}
            <Route
              path='/addnote'
              render={() => <AddNote />}
            />

          
            
          </main>
        </div>

      </AppContext.Provider>

    )
  }
}

export default withRouter(App)