// import logo from './logo.svg';
import './App.css';
import test from '../src/components/test.json'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'

function App(test) {
 const { url, tittel } = test;
  return (
    <ImageGalleryItem url={url} tittel={tittel} />
  );
}

export default App;
