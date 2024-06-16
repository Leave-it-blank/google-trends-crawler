# To run programatically, you need to do following,

1. npm install
2. touch trends.json 
3. nano trends.json and save [] as default
4. node index.js

Enjoy~

## Data Format:
    [[Date]: []]

    eg:   2024-06-16: [
        {
        "title": "Euros 2024",
        "traffic": "200K+",
        "description": "LIVE: Serbia vs England – Euro 2024",
        "trifficTag": "searches",
        "relatedLinks": {
          "title": "Aljazeera.com",
          "url": "https://www.aljazeera.com/sports/liveblog/2024/6/16/live-serbia-vs-england-uefa-euro-2024",
          "image_url": "https://t1.gstatic.com/images?q=tbn:ANd9GcSDB9ap9NF4lUcFRbdWL010sbrVrQ3_OjHxCu-G2s_Mt6LixaE4AH7WAeZgrTHMn2uQeBHKh6kW"
        },
        "header": "Sunday, June 16, 2024"
      },
    ]

    To update Date Format, check out utils/date-convert
    To update parsed data format, check out utils/parse-trends
    To update File saving, check out utils/fs-logger
    To update Crawl capabilities, check out utils/puppeter


    Thank you for checking this out.

    ~ps. I am not responsible for anything, this project was intended for learning purposes.

## License
MIT License

## Created By
Leave-it-blank: https://github.com/Leave-it-blank