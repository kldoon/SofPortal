# SOFPortal
Is a simple single page application, which makes it easy to explore the new and trending questions on Stack Overflow platform. It allows you to select topics of interest and then it shows the most recent questions about that topic in the last week. In addition, it shows the most voted questions in the past week for that selected topic/s.
It is dynamic enough so you can customize the topics of interest from the settings page. In addition, you can customize the time period that will be covered (by passed days).

## Installation and Running
1.	Git clone this repository [Link](https://github.com/kldoon/SofPortal.git) on your local machine
```
git clone https://github.com/kldoon/SofPortal.git
```

2.	Install dependencies using the flowing command. -You should have NPM and node preinstalled-
```
cd ./SofPortal
npm install
```
3.	Use the following command to start the application:
```
yarn start
```
A browser window will automatically open to the address [http://localhost:3000/](http://localhost:3000/)

## Documentation
*	SOFPortal app is built with a component based architecture using ReactJS V16.10.2 [https://reactjs.org/](reactjs.org)
*	The frontend design  and UI is done using ant.design for react library [https://ant.design](ant.design)
*	It feature a mobile friendly interface so the users can use on handheld and small devices
*	It uses axios library for the communication medium between the frontend site and the server
*	The app uses a two tire structure (from the developer point of view), where the first tire is the client side part of the app, and the second tire is the API server.
*	It utilizes Stack Exchange API v2.2 to retrieve the data from Stack Overflow platform [https://api.stackexchange.com](api.stackexchange.com)
•	The /Questions /Search API end points where used to retrieve the needed data for this application
•	The app where registered with stackapps [https://stackapps.com](stackapps.com) in order to gain more usage quote.
•	It is deployed to Heroku platform [https://heroku.com](heroku.com) NodeJs free tire.
## Features
SOFPortal introduces 3 main features in a single page app using simple tab design:
### 1.	Newest Questions:
In this section the user can navigate through a list of newest questions (by default 10) in his topic of interest. This screen shows in a compact readable form the title of each question, along with the author name and avatar and the submission date and time of the question.
*	The questions are presented in accordion format were the user can click on the title of the question to expand and show it details.
*	When expanding a post, the full thread will be shown will be shown to the user, which includes (the question body, list and count of answers and the accepted answer)
*	The body of the question is rendered in a similar format to stack overflow, so it increases the readability of that content to the user.
*	If the question has answers, then an answers section will be shown below the body of that question.
*	The answer section will have a badge with counter of number of answers. If the badge is green that means the question have an accepted answer, otherwise the badge will be red which means no accepted answer yet!
*	The accepted answer will be highlighted with a green border around it.

### 2.	Top Voted Questions:
This section shows the most voted questions in the past couple of days (based on the user settings) for the selected topic of interest. By default, it shows the top voted question in the past 7 days which are tagged as android.
*	Each question has between two parenthesis the score (votes) of it written before the title of that question.
*	The top voted questions are sorted form the highest voted to the lowest.
*	In both Newest Questions section and Top Voted Section, the user can navigate to the original question post on Stack Overflow by clicking on the SOF logo beside each question title.

### 3.	Settings page:
In this section the user can control the parameters that will be used when querying from Stack Exchange API.
*	The user can write multiple tags, which represents the topics of interests. All the questions that will be fetched should be tagged with these selected tags
*	The user can select the time interval which the posts will be fetched based on (In number of days). The maximum number of days is 30 and the minimum is 0
*	The user can select the number of posts that will be retrieved for each of the sections above. The maximum number of posts is 30 and the minimum is 0.

## Deployment
The App is deployed on heroku app platform and can be accessed through this link [https://sofportal.herokuapp.com/](SOFPortal). You might need to wait sometime (around a minute) for app to work because it is on the free tire :-) 
