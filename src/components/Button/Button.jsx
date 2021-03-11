import React, {Componet} from 'react'
import s from './Button.module.css'

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});


class Button extends Componet {
  
  // handelSearch = () => {
  // this.props.onInceremment()
  // }
  render() {
    return (
    <div className = { s.ButtonWrapper } >
      <button type="button" onClick={this.props.fetchPhoto} className={s.Button}>Load more...</button>
      </div>
        
    )}
  
}

export default Button