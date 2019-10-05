import axios from 'axios';

// import { handelResponse, handelError } from './handelResponse';

const now= parseInt(new Date().getTime()/1000);
const baseUrl = process.env.REACT_APP_API_URL;
const getBaseUrl = () => baseUrl;
const setHeaders = t => {
	const token = t 
	if (token && token.length) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	}
};
setHeaders();
export default {
	getBaseUrl,
	setHeaders,
	posts: {
        getRecentPosts: data =>
        {
            console.log(data);
            const tags="android";
            let t= new Date();
            const fromdate = parseInt(t.setDate(t.getDate() - 7)/1000);

            const query="page=1&pagesize=10&fromdate=" + fromdate + "&todate=" + now + "&order=desc&sort=creation&tagged=" + tags + "&site=stackoverflow";
            return axios
            .get(`${baseUrl}/search?` + query)
            // .then(res => res.data)
            // .catch(err => {
            //     //handelError(err);
            //     throw err;
            // })
        },
	},
	
};
