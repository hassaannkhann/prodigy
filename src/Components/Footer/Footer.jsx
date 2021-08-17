import "../includes/style.scss";
import Logo from "../../Assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-base">
            <div className="content">
                <div className="container">
                    <div className="row row-copy">
                        <div className="col-md-6">
                        <ul class="list-inline">
								<li>
                                    <img src={Logo} width="122px" alt="img-logo"></img>
                                </li>
							</ul>
                        </div>
                        <div className="col-md-6 copy-text line-height-50 ">
                            © {(new Date().getFullYear())} Bizintel Information System. 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
