import { MDBBtn, MDBCard, MDBCardBody,  MDBInput, MDBCol, MDBRow } from "mdbreact";
import Layout from "../components/Layout";

const Login = () => (
  <React.Fragment>
    <Layout>
    <MDBRow className="mt-5">
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h5 text-center mb-4">Login</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary">Login</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default Login;