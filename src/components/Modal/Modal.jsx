import s from '../Modal/Modal.module'

const  modal = ({url,tittel}) => {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src={url} alt={tittel} />
      </div>
    </div>)
}

export default  modal