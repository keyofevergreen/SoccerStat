# SoccerStat


Used Libraries:
- React 17+
- @reduxjs/toolkit
- react-router 6+
- react-helmet
- moment.js
- antd
- gh-pages

Features:
- List of leagues/competitions
- List all teams for a particular competition
- Competition calendar - list of league/competition matches
- Calendar for a particular team - list of team matches
- On the calendar pages, you can specify a filter by date (from, to)
- On the list pages, you can find an entity by text search
- After refreshing the page, the data (year, team, search query) is saved (parameters are saved using routing)
### The last feature, unfortunately, does NOT work in the demo on gh-pages

### 🐱‍🏍If you want to see a demo go [here](https://keyofevergreen.github.io/SoccerStat/)!

## How to use

1. You need to register at [www.football-data.org](https://www.football-data.org/client/register) and get an API key.
2. Clone this repository.
```
git clone https://github.com/keyofevergreen/SoccerStat.git
```
3. Go to the cloned directory (e.g. `cd SoccerStat`).
4. Add your API key to env.example:
```
REACT_APP_API_KEY = write your API key here
```
5. Run `npm install`.
6. Run `npm start`. The command will start a local live server. Open (http://localhost:8080/) in your browser.

### 🤙Contact me
[![Telegram](https://img.shields.io/badge/-Telegram-5599FF?style=for-the-badge&logo=Telegram&logoColor=FFFFFF)](https://t.me/keyofevergreen)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-5599FF?style=for-the-badge&logo=LinkedIn&logoColor=FFFFFF)](https://www.linkedin.cn/in/dan-zverev-33841b215)
[![dany2zverev@gmail.com](https://img.shields.io/badge/-dany2zverev&#64;gmail&#46;com-5599FF?style=for-the-badge&logo=Gmail&logoColor=FFFFFF)](mailto:dany2zverev@gmail.com)
