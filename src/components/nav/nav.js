import icono from '../../img/Hotelia horizontal blanco.svg';
import '../nav/estilos.css'
 

function Barra() {
  return (
    <nav>
        
    <div  class="logo">
        <img src={icono}/>   
       <i class="fa-solid fa-bars" id="si" ></i>
    </div> 

    <div class="menu" id="menu">
        <a href="/index.html" class="item">Inicio</a>
        <a href="#ubicanos" class="item">Ubícanos</a>
        <a href="#opiniones" class="item">Opiniones</a>
        <hr class="menu-hr" noshade=""> </hr>
        <button class="menu-button"><a href="/login" class="item"><i class="fa-solid fa-user"></i>Iniciar Sesion</a></button>
        <a href="/Login" class="item"><button class="navbar-button"><i class="fi fi-sr-user"></i> Iniciar Sesión</button></a>
    </div>
</nav>

  );
}

export default Barra;