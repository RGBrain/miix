# Miix

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Miix is a web application where multiple Spotify users can log-in concurrently and a combined playlist is created based on their combined musical tastes.

The built-in player allows users to play their new playlist, and it can also be saved to the user's Spotify account.

The app achieves this by making an API call to Spotify to retrieve each person's 20 most listened to tracks. The tracks are combined and 5 are randomly selected to feed another API call which retrieves a list of 10 track recommendations from Spotify. These recommendations render as a playlist on the webpage and can be played on the Spotify player.

If the user decides to save the playlist, a post API request is sent to Spotify to publish the playlist on the user's account.

This project taught us how to implement OAuth, and work with the Spotify player npm package. We also learnt how to run a post API request and were able to further develop our React.js knowlege by working with hooks such as useState() and useEffect().

## Table of contents

- [Description](#description})

- [Installation](#installation)

- [Contributing](#contributing)

- [Testing](#testing)

- [Question](#questions)

- [License](#license)

## Installation

No need to install, the site is live: **https://deft-haupia-213070.netlify.app**

## Usage

This web app is only available to Spotify Premium customers. Simply visit **https://deft-haupia-213070.netlify.app** - you can then log-in multiple users and get started. This app would be useful to a group of friends or family members who wanted to listen to music together at a social gathering such as a party or during a car journey.

On arrival to the homepage, each friend/ family member should log in to Spotify via our login button and click the 'get tracks' button, then log out. A playlist will render each time you click 'get tracks' based on your listening history. After the last person to use the app has clicked 'get tracks' you'll be presented with a playlist which takes into account everyone's music tastes. You can play this in the Spotify player on the page or hit the 'save' button to save it to your Spotify account as a public playlist. Friends and family members will be able to access this if they wish. The playlist will be named 'miix recommendations' and include the date and time in the name as a unique reference.

Click on the link below for a short demo of how the app works.

[miix demo](https://drive.google.com/file/d/1z2zxKU1Q5vTriKkSBNAWYwX3W4aSHuQP/view)

**SCREENSHOT**

![Project Screenshot](/public/screenshot.png)

## Credits

With thanks to Dom the dev for providing a tutorial which helped us get started with using the Spotify API in React.

[Spotify React tutorial](https://www.youtube.com/watch?v=wBq3HCvYfUg/ "Check out the tutorial")

The background image and vinyl video were sourced from Pexels.

## Contribution

We are using the MIT license, and welcome contributions. We do have future development goals, such as adding additional options/filters. Please get in touch if you would like to get involved.

## Testing

We plan to implement unit testing in due course. As users, we have tested the site extensively, and don't foresee you experiencing any difficulty. If you do have any problems then please raise a GitHub issue so that we can address them.

## Questions

If you have any questions, please contact a member of the development team:<p/>
Richard Brain - richard.brain@hotmail.co.uk<br />
Naomi Winchurch - naomi.winchurch@hotmail.co.uk<br />
Sarah Osbourne - EMAIL ADDRESS

## License

MIT

Copyright 2023 Richard Brain, Naomi Winchurch, Sarah Osbourne

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
