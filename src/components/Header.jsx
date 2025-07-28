import { Filters } from './Filters'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li to='/about'>About</li>
        </ul>
      </nav>
      <Filters />
    </header>
  )
}
