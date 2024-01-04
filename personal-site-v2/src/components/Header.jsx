import NavBar from "./NavBar";
function Header(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Left</h2>
            <NavBar/>
        </div>
    )
}

export default Header;
