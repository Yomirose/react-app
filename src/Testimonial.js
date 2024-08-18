// import Button from "./button"
import { useNavigate } from "react-router-dom"

function Testimonial({detailOfUsers}){
    const navigate = useNavigate();

    // const myFunction = () =>{
    //     alert("Test me")

    // }

    function goToHome(){
        navigate("/");
        navigate("/state");
        navigate("/Testimonial");
    }


    return(
        <div>
            <h2>This is the testimonial page</h2>

            {detailOfUsers.map((detail, i) =>{
                return <div key={i}>
                    <p>{detail.name}: {detail.testimonial}</p>
                </div>
            })}
            {/* <Button nameOfFunction={myFunction} childern="Test me" /> */}
            <button onClick={goToHome}>Go to home</button>
        </div>
    )
}
export default Testimonial