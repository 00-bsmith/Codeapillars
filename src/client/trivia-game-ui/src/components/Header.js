import { Container } from "react-bootstrap";
import ImageComponent from "./ImageComponent";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <>
        <Container>
            <ImageComponent />
            <NavBar />
            </Container>
        </>
    );
}

export default Header;