import "../../Home.css"
import banking from "./banking.gif";



const Content = () => {
    return (
        <div className='frontview'>
            <div style={{ margin: "auto" }}>
                <h1 style={{ fontSize: "5vw", color: "whitesmoke", padding: "5%" }}>
                    Make Your banking Easy with <br></br><div><p style={{backgroundColor:"#00000078",width:"50%",padding:"10px",borderRadius:"20px"}}>Mera Bank</p></div>
                </h1>
            </div>
            <div>
                <div style={{ paddingTop: "10%" }}>
                    <div>
                        <img style={{ width: "20vw", height: "30vw", borderRadius: "20px", boxShadow: "0px 0px 5px white" }} src={banking} alt="bankimage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;