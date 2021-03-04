import s from '../Button/Button.module.css'

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

const Button = () => {
    return (
        <button type="button" className={s.Button}>Load more...</button>
    )
}

export default Button