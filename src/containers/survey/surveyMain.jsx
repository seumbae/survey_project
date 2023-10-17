import { useLocation } from "react-router-dom";

import Personal from "./Personal";
import Security from "./Security";
import Half from "./halfDone";
const SurveyMain = () => {
    const location = useLocation();

    if(location.state){
        if(location.state.formType === undefined){
            return <Half />
        }
        if(location.state.formType === 0){
            return <Personal />
        }
        else if(location.state.formType === 1){
            return <Security />
        }
    }
};

export default SurveyMain;
