import React, { useState } from 'react'

const useApi = (fun) => {
    const [apiData, setApiData] = useState({
        loading: false,
        data: null,
        error: null
    })
    const handleApi =  async (formData) => {
        setApiData(pre => ({...pre, loading: true}));
        const res = await fun(formData);
        // console.log(res);
        if(res.error){
            setApiData(pre=> ({...pre, loading:false, error: res.msg}))
        }else{
            setApiData(pre=> ({...pre, loading:false, data: res.data}))

        }
    }
    const { loading, data, error } = apiData;
    return {handleApi, loading, data, error};
}

export default useApi