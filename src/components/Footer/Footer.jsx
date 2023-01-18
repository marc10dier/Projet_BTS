import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Liens</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">A propos de nous</a></li>
                        <li><a href = "/contact" className = "fs-15">Nous contacter</a></li>
                        <li><a href = "/blog" className = "fs-15">Localisation</a></li>
                        <li><a href = "faq" className = "fs-15">FAQ's</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Polices</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Termes & Conditions</a></li>
                        <li><a href = "/cookies" className = "fs-15">Cookies</a></li>
                        <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>About ABENG</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Acceuil</a></li>
                        <li><a href = "/cookies" className = "fs-15">Branches</a></li>
                        <li><a href = "/policy" className = "fs-15">Boutique</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Contact</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+237 694 575 149</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">abeng@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer