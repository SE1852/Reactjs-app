

import LOGO from '../assets/logo.png'
import  '../css/headerStyle.css'


function Header() {

    return (
        <>
            <div className="header">
                <div className="container">

                <a href="http://localhost:3000/"  >
                    <img style={{ height: '200px', width: '300px' }} src={LOGO}>
                    </img>
                </a>
                <div className="text-detail">
                    <h1 >
                       CÔNG TY CỔ PHẦN TSHOP TECHNOLOGY <br />
                    </h1>
                    <p>
                    &mdash; Công Nghệ Tương Lai !!! &mdash;
                    </p>
                </div>
                <div className="tech">
                    
                </div>
                </div>
            </div>
        </>
    );


}

export default Header