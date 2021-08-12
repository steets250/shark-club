import './navigation.css'
import Plane from './Plane'
import Wave from './Wave'

export function Navigation () {
    return (
        <div class="container">
            <div class="navigation">
                <div class="plane">
                <Plane/>
                </div>
            </div>
            <div class="wave">
            <Wave />
            </div>    
        </div>  
        );  
}

export default Navigation