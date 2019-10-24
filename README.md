# Bubble

## Description

*Bubble* is a web application that scrapes online sources for trending news, extracts the keywords, and uses them to generate word clouds based on how often each keyword appears. Clicking on any of the keywords redirects the user to a trending news article on the topic.

Our objective was to redesign a common feature of everyday life with simplicity, usability and attractiveness. Instead of showing images and descriptions like traditional news platforms, *Bubble* uses Google Natural Language Processing to summarize news articles into keywords. The results are displayed to the user in popularity-based word clouds in the following categories: General, Science & Technology, Canada, Politics, Entertainment, and Sports.

Click [here](https://iangu.me/works/bubble/index.html) to see the final product (it may take about 30 seconds to load if the Heroku web dyno has gone to sleep).

## Screenshots

![sports](https://user-images.githubusercontent.com/34670205/53299110-5f376000-3804-11e9-9fc3-ed5ff33d9037.png)

![sci-and-tech](https://user-images.githubusercontent.com/34670205/53299111-65c5d780-3804-11e9-8488-5cd3bac9b1ae.png)

![general](https://user-images.githubusercontent.com/34670205/53299119-74ac8a00-3804-11e9-9f6f-741ded3dbe7d.png)

## Tools

This application was created using:
- Node.js
- Express.js
- cheerio
- JQuery
- Google Cloud Natural Langauge API
- Bootstrap
- [D3 Wordcloud](https://github.com/wvengen/d3-wordcloud), created by [wvengen](https://github.com/wvengen) and licensed under the MIT License

## Contributors

Frontend: [Annie Gao](https://github.com/tallspider) & [Joseph Wang](https://github.com/joseph001126)

Backend: [Ian Gu](https://github.com/iangu48) & [Alice Cai](https://github.com/alice-cai)

This project was created at Hack the Valley 2019.
