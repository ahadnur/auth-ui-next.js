import { MDBBtn, MDBCard, MDBCardBody,  MDBInput, MDBCol, MDBRow } from "mdbreact";
import Layout from "../components/Layout";

const Register = () => (
  <React.Fragment>
    <Layout>
      <MDBRow className="mt-5">
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h5 text-center mb-4">Register</p>
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
                    label="Your Email"
                    icon="envelope"
                    group
                    type="email"
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
                  <MDBInput
                    label="Retype Your Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary">Register</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default Register;