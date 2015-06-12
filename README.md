Book of Face    
==============
This is a minimal version of how Facebook post works
By re-building this, you will gain familarity with AJAX, CSS styling, and how to use an external library.

Instructions
------------------------
In production environment, you often need API Key in order to interaction with server. In order to protect 
the intergrity of our server, we need to keep our API Key private. 

1. Open env.js
2. Set APP_ID to WRC1NZmZwAdtAVX5PzVnRN6WgynQwOAXWMkcB7VX
3. Set API_KEY to qMVsOc3O9jT6FjVUrwaDnFnluu2eJOBeBeDIUYS1

This will attach the correct credential to each ajax request you make. The .gitignore file will prevent the 
updated env.js from being push to your repo.

Requirements
------------------------
- [ ] Fetch messages from server and show on page. Server URL is 'https://api.parse.com/1/classes/bookofface'
- [ ] Post message from server using form
- [ ] Fetch messages from server every 5 seconds
- [ ] Show contextual time using Moment.js
- [ ] Make it look nice. Experiment with $.animate, $.fadeIn, $.fadeOut, CSS flex bos, and CSS keyframe.
- [ ] Create your own account at parsecom and use your own URL
- [ ] Create a way to delete existing post


Getting Started
------------------------
1. Fork the repo
2. Go to your terminal and type:

            git clone http://github.com/<your-github-handle>/BookOfFace

3. Open app.js and start coding

Tips
------------------------
1. Commit Often!

            git add --all
            git commit -m "<your comment here>"

2. Push to your fork before you are done with the day

            git push origin master

3. Submit pull request when you are done

How to Submit a Pull Request
------------------------
1. Click Pull Request
2. Click New Pull Request
3. Select "Base fork:GreedyWolf/Utility_Belt  Base:your_handle" ==> "Head fork:<your-github-handle>/Utility_Belt compare:master" 
4. Leave detail comments on changes made by pull request
5. Submit


