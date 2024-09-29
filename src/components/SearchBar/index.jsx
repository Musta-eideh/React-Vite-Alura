import { useState } from 'react'
import './styles.css'

export default function SearchBar(){

    const [termSearch, setTermSearch] = useState('');
    console.log(termSearch)
    return(
        <input 
        type="search" 
        placeholder="Type what you are looking for" 
        className='SearchBar'
        value={termSearch}
        onChange={(evento) => setTermSearch(evento.target.value)} />
    )
}