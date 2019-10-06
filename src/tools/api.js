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
const getSettings=()=>
{
    let settings=null
    if(localStorage.sofSettings)
    settings=JSON.parse(localStorage.sofSettings);
    if(!settings)
    {
        //set the default settings if no settings found        
        settings={intervalInDays:7,maxPostsCount:10,tags:['android'],settingDate: new Date()}
        localStorage.sofSettings=JSON.stringify(settings)
    }
    return settings
}
setHeaders();
export default {
	getBaseUrl,
	setHeaders,
	posts: {
        getRecentPosts: () =>
        {
            const data= getSettings();
            const tags=data.tags.join(";");
            let t= new Date();
            const fromdate = parseInt(t.setDate(t.getDate() - data.intervalInDays)/1000);
            const query="page=1&pagesize=" +data.maxPostsCount + "&fromdate=" + fromdate + "&todate=" + now + "&order=desc&sort=creation&tagged=" + tags + "&key=h873dHopN7p4tfx1FZMBxg((&site=stackoverflow&filter=!-lBwSMnedIpLk8_)t7QzgDTRpN1z-mbtQGSFwU4NuW(--BWqW6RZRH";
            return axios
            .get(`${baseUrl}/questions?` + query)            
        },
        getTopPosts: () =>
        {
            const data= getSettings();
            const tags=data.tags.join(";");
            let t= new Date();
            const fromdate = parseInt(t.setDate(t.getDate() - data.intervalInDays)/1000);
            const query="page=1&pagesize=" +data.maxPostsCount + "&fromdate=" + fromdate + "&todate=" + now + "&sort=votes&order=desc&sort=creation&tagged=" + tags + "&key=h873dHopN7p4tfx1FZMBxg((&site=stackoverflow&filter=!-lBwSMnedIpLk8_)t7QzgDTRpN1z-mbtQGSFwU4NuW(--BWqW6RZRH";
            return axios
            .get(`${baseUrl}/questions?` + query)            
        },
	},
	
};
