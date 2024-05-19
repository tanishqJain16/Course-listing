import { useNavigate } from "react-router-dom";
import "./BackButton.css";
import { IoMdArrowRoundBack } from "react-icons/io";

function BackButton() {
    const navigate = useNavigate()
    const navigateBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <IoMdArrowRoundBack className="backButton" onClick={navigateBack} />
        </div>
    )
}

export default BackButton
