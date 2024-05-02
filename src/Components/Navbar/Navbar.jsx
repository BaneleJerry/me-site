
import "./NavbarStyle.css"
export default function Navbar(){
    

    return (
      <>
        <nav>
          <h3 className="" logo>
            Banele Thabede
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/Projects">Projects</a>
            </li>
          </ul>
        </nav>
      </>
    );
}