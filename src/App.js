import React, {Component} from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import Button from './components/Button/Button'
import searchbar from './components/Searchbar/Searchbar'




class App extends Component {
  state = {
    photos: [],
    currentPage: 1,
    search:''
  }

  componentDidUpdate(prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhoto();
      }
        
    
              
    }

  onChangeQuery = query => {
    this.setState({ search:query})
       
        
  }
  
  // onInceremment = () => {
  //   fetchPhoto()
  // }
  fetchPhoto = () => {
    const { currentPage, search} = this.state;
      axios
            .get(`https://pixabay.com/api/?key=19812915-5ef4e3fab5142faeb0fc408e1&q=${search}&page=${currentPage}`)
        .then(response => {
              
          this.setState(prevState => ({
            photos: response.data.hits,
            currentPage: prevState.currentPage + 1
          }))
        })
                
  }

  render() {
    return (
    <>
        <Searchbar onSubmit={this.onChangeQuery }/>
        <ImageGallery>
        <ImageGalleryItem items={this.state.photos}/>
        </ImageGallery>
        <Button onClick={this.fetchPhoto}/>
       </>   
      
    
    
  );}
  
}

export default App;
