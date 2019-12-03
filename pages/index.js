import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Link from 'next/link';
import Layout from '../components/Layout';


const Index = () => (
	<React.Fragment>
    <Layout>
      <MDBRow className="mt-5">
        <MDBCol md="8" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
							<h1>Welcome to Authentication UI, Next.js</h1>
							<div className="text-center">
								<Link href="/register">
									<MDBBtn color="primary">Register</MDBBtn>
								</Link>
								<Link href="/login">
									<MDBBtn color="primary">Login</MDBBtn>
								</Link>
							</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default Index;