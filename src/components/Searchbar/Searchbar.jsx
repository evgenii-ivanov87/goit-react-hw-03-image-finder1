import s from '../Searchbar/Searchbar.module'

const searchbar = () =>{return(<header className={s.Searchbar}>
  <form className={s.SearchForm}>
    <button type="submit" className={s.SearchForm - button}>
      <span className={s.SearchForm - button - label}>Search</span>
    </button>

    <input
      className={s.SearchForm - input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>)}

export default searchbar
