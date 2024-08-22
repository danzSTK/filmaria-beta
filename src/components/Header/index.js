import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header


//eff27aed81b7a63e400492739c81f462
//https://api.themoviedb.org/3/movie/550?api_key=eff27aed81b7a63e400492739c81f462