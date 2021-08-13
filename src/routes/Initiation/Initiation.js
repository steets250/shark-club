import '../Home/home.css';
import Navigation from '../../components/nav/Navigation';
import Footer from '../../components/footer/Footer';
import sharkie from'../sharkie.png';

export function Initiation () {
    return (
        <div>
        <meta http-equiv="refresh" content="0; URL='https://www.youtube.com/watch?v=QtBDL8EiNZo'" />
        <Navigation />
        <div class="main">
        <h1>welcome to ivy's shark club</h1>
        <h2>v excited to see u</h2>
        </div>
        <div class="sharkie">
        <img src={sharkie}></img>
        </div>
        <Footer />
        </div>
    );
}

export default Initiation