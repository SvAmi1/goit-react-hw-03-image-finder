export const SearchBar = ({ onSubmit, }) => {
    return (
      <div>
        <form>
        <button onClick={onSubmit} type='submit'>
            <span>Search</span>
        </button>
            <input 
            type="text" 
            name="query"  
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"/>
        
        </form>
      </div>
    );
  };