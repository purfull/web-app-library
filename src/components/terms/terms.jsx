// import Footer from "./Footer";
import "./terms.css";
import Footer from "../footer/Footer";

const Terms = () => {
    return ( 
        <>
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>
            <hr className="divider" />
            <br />
            <p>Welcome to Thailash! These Terms and Conditions ("Terms") govern your use of our website ("Website") and any services or products provided through it. By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our Website.</p>
            <br />
            <p className="section-title">Acceptance of Terms</p>
            <br />
            <p>By using this Website, you confirm that:</p>
            <ul className="policy-list">
                <li>You are at least 18 years old or accessing the Website under the supervision of a parent or legal guardian.</li>
                <li>You have read, understood, and accepted these Terms in full.</li>
            </ul>
            <br />
            <p className="section-title">Modifications to the Terms</p>
            <br />
            <p>We reserve the right to update or modify these Terms at any time without prior notice...</p>
            {/* ... continue with the rest of the content, replacing classNames accordingly */}
        </div>
        <Footer width={100} />
        </>
    );
}

export default Terms;
