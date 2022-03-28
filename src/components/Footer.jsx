import React from 'react'

function Footer() {
    return (
        <div>
            <section class="footer">
                <div class="footer-container">
                    <p class="foot-p">Made with <i class="fas fa-heart prime-color-text"></i> by
                        Anshika Agarwal</p>
                    <ul class=" complement-text-color nav-links flex-row">
                        <a href="https://github.com/anshikaa12" class="nav-connect-a li-link-a">
                            <li class="connect-link li-link">
                                <i class="fab fa-github i-link-connect"></i>
                            </li>
                        </a>
                        <a href="https://twitter.com/anshikaa_12" target="_blank" class="nav-connect-a li-link-a ">
                            <li class="connect-link li-link i-link-connect">
                                <i class="fab fa-twitter"></i>
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/anshikaagarwal12/" target="_blank" class="nav-connect-a li-link-a">
                            <li class="connect-link li-link">
                                <i class="fab fa-linkedin-in i-link-connect"></i>
                            </li>
                        </a>
                    </ul>
                    <p class="foot-p  flex-col-center">© 2022 PixelUI</p>
                </div>
            </section>
        </div>
    )
}

export default Footer