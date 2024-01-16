import { Container, Navbar } from "react-bootstrap";

const Footer: React.FC = () => {
    return (<>
        <div>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Text>
                        © Kishore Babu Gudi {new Date().getFullYear()}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    </>)
};

export default Footer;