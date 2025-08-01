import "./policy.css";
import Footer from "../footer/Footer";
const Policy = () => {
    return (
        <>
            <div className="policy-container">
                <h1 className="policy-title">Privacy and Policy</h1>
                <hr className="policy-divider" />
                <p>Thailash values your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, share, and safeguard your information when you visit our website ("Website") or make a purchase. By using our Website, you consent to the practices described in this policy.</p>

                <p className="section-title">Information We Collect</p>
                <p className="subsection-title"> a Personal Information</p>
                <p>We may collect the following personal information when you interact with our Website:</p>
                <ul className="policy-list">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Billing and shipping address</li>
                    <li>Payment information (processed securely by third-party payment gateways)</li>
                </ul>

                <p className="subsection-title">b Non-Personal Information</p>
                <p>We may also collect non-personal data, including:</p>
                <ul className="policy-list">
                    <li>Pages visited and time spent on the Website</li>
                    <li>Cookies and other tracking technologies</li>
                </ul>

                <p className="section-title">How We Use Your Information</p>
                <p>We use your information for the following purposes:</p>
                <ul className="policy-list">
                    <li>To process and fulfill orders</li>
                    <li>To communicate with you regarding your purchase or inquiries.</li>
                    <li>To improve our Website and services.</li>
                    <li>To send promotional emails and offers (only with your explicit consent).</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <p className="section-title">Sharing of Information</p>
                <p>We do not sell or rent your personal information. However, we may share your data with:</p>
                <ul className="policy-list">
                    <li>Third-party service providers who assist in fulfilling orders, processing payments, or managing marketing campaigns.</li>
                    <li>Law enforcement or regulatory authorities if required by law or to protect our legal rights.</li>
                    <li>Business partners in the event of a merger, acquisition, or sale of assets (subject to confidentiality agreements).</li>
                </ul>

                <p className="section-title">Third-Party Interactions</p>
                <p>While using our Website, you may encounter pop-ups, advertisements, or redirections. Please note that such activities are not under our control, and we are not responsible for the privacy practices or content of third-party websites.</p>

                <p className="section-title">Cookies and Tracking Technologies</p>
                <p>Our Website uses cookies to enhance your browsing experience. You can manage or disable cookies through your browser settings. Disabling cookies may impact your ability to use certain features of the Website.</p>

                <p className="section-title">Data Retention</p>
                <p>We retain your personal information only for as long as necessary to:</p>
                <ul className="policy-list">
                    <li>Fulfill the purposes outlined in this policy.</li>
                    <li>Comply with legal obligations.</li>
                    <li>Resolve disputes.</li>
                </ul>

                <p className="section-title">Security Measures</p>
                <p>We implement industry-standard security measures to protect your data, including:</p>
                <ul className="policy-list">
                    <li>SSL encryption for transactions.</li>
                    <li>Restricted access to personal information.</li>
                    <li>Regular monitoring of our systems for vulnerabilities.</li>
                </ul>
                <p>Despite our efforts, no system is completely secure.</p>
                <p>By using our Website, you acknowledge and accept the inherent risks of online transactions.</p>

                <p className="section-title">Limitations of Liability</p>
                <p>We are not liable for any damages, including direct, indirect, incidental, or consequential damages, arising from or related to your use of our Website and services. Our liabilities are limited to the maximum extent permitted by applicable laws, including the Digital Personal Data Protection Act, 2023.</p>

                <p className="section-title">Your Rights</p>
                <p>Under applicable laws in India, you have the following rights:</p>
                <ul className="policy-list">
                    <li>Access: Request access to your personal information.</li>
                    <li>Correction: Request correction of inaccurate or incomplete data.</li>
                    <li>Deletion: Request deletion of your data (subject to legal retention requirements).</li>
                    <li>Opt-Out: Opt-out of marketing communications by following the unsubscribe link in our emails.</li>
                </ul>
                <p>To exercise these rights, contact us at contact@thailash.com</p>

                <p className="section-title">Termination</p>
                <p>We reserve the right to terminate your access to our Website and services at any time without prior notice. Upon termination, you must immediately cease using our Website and services.</p>

                <p className="section-title">Governing Law and Dispute Resolution</p>
                <p>This Privacy Policy is governed by the laws of India. Any disputes arising out of or related to this policy shall be resolved through an appropriate dispute resolution mechanism, as defined under applicable laws.</p>

                <ul className="policy-list">
                    <li>You have read, understood, and agreed to the terms outlined in this Privacy Policy.</li>
                    <li>You accept the obligations and responsibilities described herein.</li>
                </ul>

                <p className="section-title">Contact Us</p>
                <p>For questions or concerns about this Privacy Policy, please contact us at:</p>
                <ul className="policy-list">
                    <li>Address: 3/127, Plot No 144, Sirangudi Puliyur, Nagapattinam - 611108 </li>
                    <li>Email: contact@thailash.com</li>
                </ul>
            </div>

        </>
    );
};

export default Policy;
