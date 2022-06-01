import LOGO from '../imgs/LOGO.jpg'
import CardWidget from './CardWidget';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src={LOGO} alt='logo' width="100" ></img>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PetyS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                </div>
                <CardWidget />
            </div>
            
</nav>
    );
  }
  
  export default NavBar;
  