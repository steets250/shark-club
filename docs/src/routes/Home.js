import './home.css'
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';
import sharkie from'./sharkie.png';

export function Home () {
    return (
        <div>
        <Navigation />
        <div class="main">
        <h1>can we pretend that airplanes in the night sky are like shooting stars</h1>
        </div>
        <div class="sharkie">
        <img src={sharkie}></img>
        </div>
        <Footer />
        </div>
    );
}

export default Home