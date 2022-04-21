import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button"
import './style.css'

const SearchBar = () => {
    return (
        <div className="searchBar">
            <Input type='text' placeholder='Buscar producto...' />
            <Button variant="light" icon="search" text="Buscar" />
        </div>
    )
}


export default SearchBar