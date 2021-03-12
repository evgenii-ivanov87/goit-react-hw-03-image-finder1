import React, {Component} from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import Button from './components/Button/Button'
import LoaderNew from './components/Loader/Loader'




class App extends Component {
  state = {
    photos: [],
    currentPage: 1,
    search: '',
    isLoading: false,
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhoto()
    }
  }

  onChangeQuery = query => {
    this.setState({ search: query,currentPage: 1,photos:[]})       
        
  }
  
  
  fetchPhoto = () => {
    const { currentPage, search } = this.state;
    this.setState({isLoading: true})
      axios
            .get(`https://pixabay.com/api/?key=19812915-5ef4e3fab5142faeb0fc408e1&q=${search}&page=${currentPage}`)
        .then(response => {
              
          this.setState(prevState => ({
            photos: [...prevState.photos,...response.data.hits],
            currentPage: prevState.currentPage + 1
          }))
        }).finally(() => this.setState({ isLoading: false }));
                
  }

  render() {
    return (
      <>
        
        <Searchbar onSubmit={this.onChangeQuery} />                 
        <ImageGallery>
        <ImageGalleryItem items={this.state.photos}/>
        </ImageGallery>
        {this.state.photos.length>0 && !this.state.isLoading && (<Button onClick={this.fetchPhoto} photo={this.state.photos}/>) }
        {this.state.isLoading && <LoaderNew />  }
       </>   
      
    
    
  );}
  
}

export default App;
