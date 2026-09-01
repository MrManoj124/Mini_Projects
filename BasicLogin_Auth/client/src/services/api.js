// Local API functions
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) =>{
    try{
        const response = await fetch(`${API_URL}${endpoint}`,{
            headers:{
                'Content-Type':'application/json',
                ...options.headers,
            },
            ...options,
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || 'Something went wrong');  
        }

        return {success : true, ...data};
    }catch(error){
        return{success : false, message:error.message};
    }
};

//Auth APIs
export const registerUser = async(userData) => {
    return apiCall('/register',{
        method : 'POST',
        body:JSON.stringify(userData),
    });
};


export const getUserProfile = async (token) =>{
    return apiCall('/user',{
        method:'GET',
        headers:{
            Authorization:`Bearer ${token}`,
        },
    });
};

export const updateUserProfile = async (token, userData) => {
    return apiCall('/user/update',{
        method:'PUT',
        headers:{
            Authorization:`Bearer ${token}`,
        },
        body:JSON.stringify(userData),
    });
};


export const loginUser = async (credentials) => {
    return apiCall('/login',{
        method:'POST',
        body:JSON.stringify(credentials),
    });
}





