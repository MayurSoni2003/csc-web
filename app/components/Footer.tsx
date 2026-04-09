import { FadeInUp } from "./MotionWrappers";
import Link from "next/link";

function Footer(){
    return(
        <div>
            <footer className="main-footer">
                <FadeInUp className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                        <h3>
                            <span className="accent">
                            <img
                                src="/assets/csc_logo.png"
                                alt="CSC Logo"
                                style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block', margin: '-12px 0' }}
                            />
                            </span> 
                            THE CORRECT STEPS
                        </h3>
                        <p>SPECIALIZED IN PROBLEM-SOLVING ROBOTICS AND AUTOMATION FOR INDUSTRIAL AND DEFENSE SECTORS.</p>
                        </div>
                        <div className="footer-links">
                        <h4>SOLUTIONS</h4>
                        <ul>
                            <li><Link href="#">Sustainable & Renewable Products</Link></li>
                            <li><Link href="#">Origami & Flexure</Link></li>
                            <li><Link href="#">Physics of Design</Link></li>
                            <li><Link href="#">3D Printing</Link></li>
                        </ul>
                        </div>
                        <div className="footer-links">
                        <h4>OUR RESEARCH</h4>
                        <ul>
                            <li><Link href="#">Research Papers & Patents</Link></li>
                            <li><Link href="#">Blogs, Articles & News</Link></li>
                        </ul>
                        </div>
                        <div className="footer-links">
                        <h4>LEGAL</h4>
                        <ul>
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">Refund & Cancellation Policy</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-bottom border-top">
                        <p>© 2026 THE CORRECT STEPS. ALL RIGHTS RESERVED.</p>
                        <p><Link href="https://thecorrectsteps.com" target="_blank">THECORRECTSTEPS.COM ↗</Link></p>
                    </div>
                </FadeInUp>
            </footer>
        </div>
    )
}

export default Footer;