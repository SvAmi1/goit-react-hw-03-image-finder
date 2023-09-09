import { MdYoutubeSearchedFor } from 'react-icons/md';
import { Form, Input, Search, Thumb } from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
    return (
      <Thumb>
        <Form onClick={onSubmit}>
        <Search  type='submit'>
            <MdYoutubeSearchedFor/>
        </Search>
            <Input 
            type="text" 
            name="query"  
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"/>
        
        </Form>
      </Thumb>
    );
  };