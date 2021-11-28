import {SiInstagram, SiFacebook, SiYoutube, SiTwitter} from "react-icons/si"
import "./footer.css"

function Footer() {

    return(
        <div className="main-footer bg-dark">
            <div className="container"> 
                <div className="row">
                    
                    <div className="col"> 
                        <h4>Now That's A Wrap </h4>
                        <ul className="list-unstyled">
                            <li>801 NW 3rd Ave, Suite 101</li>
                            <li>Miami, FL 33136</li>
                            <li>786.955.5241</li>
                            <li>now_thatsawrap@yahoo.com</li>
                        </ul>
                    </div>
                    <div className="col"> 
                        <h4>Hours</h4>
                        <ul className="list-unstyled">
                            <li><strong>Open Daily</strong> &bull; Monday, Wednesday, Thursday 10am-6PM</li>
                            <li><strong>Open Late</strong> &bull; Tuesday and Friday 10am-9:30PM</li>
                            <li><strong>Open for Private Bookings</strong> &bull; Saturday and Sunday</li>
                        </ul>
                    </div>
                    <div className="col"> 
                        <h4>Social Media</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/nowthatsawrap2016/" target="_blank" rel="noopenner noreferrer"><SiFacebook/></a></li>
                            <li><a href="https://www.instagram.com/now_thatsawrap/?hl=en" target="_blank" rel="noopenner noreferrer"><SiInstagram/></a></li>
                            <li><a href="https://twitter.com/now_thatsawrap?s=11" target="_blank" rel="noopenner noreferrer"><SiTwitter/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCMSSMKY1XTU2ExN-dkN5zAA" target="_blank" rel="noopenner noreferrer"><SiYoutube/></a></li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="row">
                        <p class="text-center">
                            &copy;{new Date().getFullYear()} Now That's A Wrap
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    

}
export default Footer;