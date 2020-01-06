import React from 'react';
import Search from './search';

class Header extends React.Component{
    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src={require("../logo.svg")} alt="logo" width="50px"/>KabarKabar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Sepakbola <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ekonomi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Politik</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hiburan</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lainnya
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Luar Negeri</a>
          <a class="dropdown-item" href="#">Lainnya lagi</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lainnya terus</a>
        </div>
      </li>
    </ul>
    <Search />
    <ul class="navbar-nav ml-lg-5">
    <li class="nav-item">
        <a class="nav-link" href="#">Masuk</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Daftar</a>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}
export default Header;