const initialState = {
    loading: false,
    err: false,
    data: {
        labels: [],
        datasets: [{
            label: 'ETH',
            data: [],
            backgroundColor: 'rgba(151, 193, 233, 0.6)',
            borderColor: 'rgba(1, 0, 40, 0.5)',
            pointBorderColor: 'rgba(1, 0, 40, 0.5)',
            pointBackgroundColor: 'rgba(1, 0, 40, 1)',
            fill: true
    }]
    }
    
};


const ethereumReducer = (state = initialState, action) => {
    const {type, payload} = action;



    switch(type){

        case "AWAITING_ETH":
            return{
                ...state,
                loading: true
            }

        case "REJECTED_ETH":
            return{
                ...state,
                loading: false,
                err: true
            }

        case "SUCCESS_ETH":
            return{
                ...state,
                loading: false,
                data: {
                    labels: payload.labels,
                    datasets: [{
                        label: 'ETH',
                        data: payload.data,
                        backgroundColor: 'rgba(151, 193, 233, 0.6)',
                        borderColor: 'rgba(1, 0, 40, 0.5)',
                        pointBorderColor: 'rgba(1, 0, 40, 0.5)',
                        pointBackgroundColor: 'rgba(1, 0, 40, 1)',
                        fill: true
                }]
                }
            }
        
        default:
            return state;

        
    }
    
}

export default ethereumReducer;