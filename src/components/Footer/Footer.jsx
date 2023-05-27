import lightLogo from '/light.svg'


const Footer = () => {
    
    return (
        <footer>
            <div class="footer">
                <div class="footer__col">
                    <div class="footer__logo">
                    <img src={lightLogo} className="footer__logo" alt="Light logo" />
                    </div>
                    <p class="footer__text">
                        Happy to help
                    </p>
                </div>
                <div class="footer__col">
                    <p class="footer__text">
                        Happy to help
                    </p>
                </div>
                <div class="footer__col">
                    <h4>Our Links</h4>
                    <ul>
                        <li class="footer__link">
                        <a href="#home">Home</a>
                        </li>
                        <li class="footer__link">
                        <a href="#about">About Us</a>
                        </li>
                        <li class="footer__link">
                        <a href="#">Products</a>
                        </li>
                        <li class="footer__link">
                        <a href="#blog">Blog</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <h4 class="item-heading">Subscribe Now</h4>
                    
                </div>
            </div>
            <p class="copyright">
            Copyright © 2023. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer