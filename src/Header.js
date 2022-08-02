import { Link } from 'react-router-dom';
import './App.css';

export default function Header(){
 return(
    <div className="header">
    <Link to="/" className="title">Quiz Hub</Link>
    <hr className="divider" />
    </div>
 );
}

