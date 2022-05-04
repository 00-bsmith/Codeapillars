import NavBar from "./NavBar";
import ImageComponent from "./ImageComponent";
import { Container } from "react-bootstrap";


const Header = () => {
    return (
        <>
          {/* <h1 className="my-2">TriviaPillar</h1> */}
         <Container fluid>
            <ImageComponent />
            <NavBar/>
        </Container>
      
        </>
    );
}

export default Header;