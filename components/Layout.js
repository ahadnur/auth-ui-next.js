import Link from 'next/link';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBContainer, MDBIcon } from "mdbreact";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">PSYCODER</strong>
          </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/register">
                  <a className="nav-link">Register</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link href="/login">
                  <a className="nav-link">
                    <MDBIcon icon="user"/> Log In
                  </a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          
        </MDBNavbar>

        <MDBContainer>
          {this.props.children}
        </MDBContainer>
      </React.Fragment>
    )
  }
};

export default Layout;