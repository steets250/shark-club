import './navigation.css';
import Plane from './Plane';
import Wave from './Wave';
import { Link } from "react-router-dom";

export function Navigation () {
    return (
        <div class="container">
            <div class="col1">
                <div class="plane">
                <Plane />
                </div>
                <div class="wave">
                <Wave />
                </div>
            </div>
            <div class="clouds">
                <div class="cloud1">
                <Link to="/">join us!</Link>
                </div>
                <div class="cloud2">
                <Link to="/">sharkie shark</Link>
                </div>
                <div class="cloud3">
                <Link to="/">contact</Link>
                </div>
            </div>
        </div>  
        );  
}

export default Navigation