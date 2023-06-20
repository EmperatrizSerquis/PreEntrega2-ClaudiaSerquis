import lightLogo from '/light.svg'
import blackLogo from '/light-black.svg'


const Fancy = () => {
    
    return (
        <section>
            <div className="center">
                <a href="https://mui.com/" target="_blank">
                    <img src={lightLogo} className="logo" alt="Light logo" />
                </a>
                <a href="https://github.com/mui/material-ui/" target="_blank">
                    <img src={blackLogo} className="logo light" alt="Black logo" />
                </a>
            
                <h1>LED LIGHTS FOR LIFE</h1>
            
                <p className="read-the-docs">
                    Look to our Products
                </p>
            </div>
        </section>
    )
}

export default Fancy