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
                            <li><Link href="#">CUSTOM ROBOTICS</Link></li>
                            <li><Link href="#">INDUSTRIAL AUTOMATION</Link></li>
                            <li><Link href="#">CRASH &amp; IMPACT SIMULATION</Link></li>
                            <li><Link href="#">FEM &amp; CAD MODELLING</Link></li>
                        </ul>
                        </div>
                        <div className="footer-links">
                        <h4>TECHNOLOGIES</h4>
                        <ul>
                            <li><Link href="#">BIOMECHANICS</Link></li>
                            <li><Link href="#">FLEXURE JOINTS</Link></li>
                            <li><Link href="#">ORIGAMI MICRO-ROBOTICS</Link></li>
                        </ul>
                        </div>
                        <div className="footer-links">
                        <h4>LEGAL</h4>
                        <ul>
                            <li><Link href="#">PRIVACY POLICY</Link></li>
                            <li><Link href="#">TERMS OF SERVICE</Link></li>
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