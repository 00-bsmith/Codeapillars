import NavBar from "./NavBar";
import ImageComponent from "./ImageComponent";
import { Container } from "react-bootstrap";


const Header = () => {
    return (
        <>
          
         <Container fluid>
            <ImageComponent />
            <NavBar/>
        </Container>
      
        </>
    );
}

export default Header;