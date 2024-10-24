import CartWidget from "../CartWidget/CartWidget"



function NavBar() {
    return (
      <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li class="nav-item ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> 
        <a class="nav-link active" aria-current="page" font-weight-bold="" href="#">Mods</a>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Community</a>
        </li>
      </ul>
      <form class="navbar-nav me-auto mb-8 mb-lg-0 " role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
  </>
      )
      }
      
      export default NavBar