import './navigation.css';
import Plane from './Plane';
import Wave from './Wave';

export function Navigation () {
    return (
        <div class="container">
            <div class="navigation">
                <div class="plane">
                <Plane/>
                </div>
                <div class="cloud1">
                initiation
                </div>
                <div class="cloud2">
                about
                </div>
                <div class="cloud3">
                contact
                </div>
            </div>
            <div class="wave">
            <Wave />
            </div>  
        </div>  
        );  
}

export default Navigation