import logo from './logo.svg';
import './App.css';

function App() {


  
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Girls</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Boys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Kidss</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://icms-image.slatic.net/images/ims-web/bc97f484-902c-4147-ab32-70daf71645ff.jpg_1200x1200.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/dba81be4-6927-43f4-81b0-8f4bf5503fc5.jpeg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/4501893f-b6a3-4ce5-b2a3-e255e6d2c32d.jpeg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


      
      </div>
  );
}

export default App;
