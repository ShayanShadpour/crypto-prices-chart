import axios from "axios";
import moment from "moment";

export const getData = ({time, number}) => async dispatch => {

    try{
        
        dispatch({
           type: "AWAITING_ETH" 
        })

        const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/ETHUSD?apikey=dbdfba40140386dd24b3b26e4b9fbd57`);
        console.log("response", response.data);


        const labels = [];

        const data = [];
        //data coming in from most recent to oldest, need to reverse it
        for(let i = 0; i< response.data.length; i++){
            data.unshift(response.data[i].close)
            labels.unshift(moment(response.data[i].date).format("LT"))

            if(i === (number-1)){
                break;
            }
        }

        dispatch({
            type: "SUCCESS_ETH",
            payload: {
                data,
                labels
            }
        })

    } catch (e) {
        dispatch({
            type: "REJECTED_ETH"
        })
    }

}