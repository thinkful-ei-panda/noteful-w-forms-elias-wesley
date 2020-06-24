import React from 'react'
import Header from './Header'
import Folders from './Folders'
import Notes from './Notes'
import {Route, withRouter} from 'react-router-dom'
import AppContext from './AppContext'

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
      console.log(data);
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

  render(){
    return (
      <AppContext.Provider value={{
        folders:this.state.folders,
        notes:this.state.notes,
        currentFolder:this.state.currentFolder,
        currentNote:this.state.currentNote
      }} >

        <div className='App'>
          <Header handleClickHeader={this.handleClickHeader}/>
          <main>
            {/* Home Route */}
            <Route exact 
              path='/' 
              render={() => <Folders handleFolderSelect={this.handleFolderSelect}/>}
            />
            

            {/* Folder Route */}
            <Route
              exact
              path='/folders/:folderId' 
              render={() => <Folders currentFolder={this.state.currentFolder} handleFolderSelect={this.handleFolderSelect}/>} 
            />

            {/* Note Route */}
            <Route
              exact
              path='/notes/:noteId' 
              render={(routeProps) => <Folders {...routeProps} handleBackClick={this.handleBackClick} handleFolderSelect={this.handleFolderSelect} />} 
            />

            <Route
              path='/'
              render={() => <Notes currentFolder={this.state.currentFolder} handleNoteSelect={this.handleNoteSelect} currentNote={this.state.currentNote} notes={this.state.notes}/>}
            />
            
          </main>
        </div>

      </AppContext.Provider>

    )
  }
}

export default withRouter(App)