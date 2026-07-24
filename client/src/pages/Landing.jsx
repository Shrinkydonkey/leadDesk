import LeadForm from "../components/LeadForm";
import "../styles/Landing.css";

function Landing() {
    return (
        <div className="landing">

            <div className="hero">

                <h1>LeadDesk Mini</h1>

                <p>
                    Capture quality leads for your business
                    in one simple dashboard.
                </p>

                <LeadForm />

            </div>

            <footer>
                Built for{" "}
                <a
                    href="https://digitalheroesco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Digital Heroes Training Task
                </a>
            </footer>

        </div>
    );
}

export default Landing;