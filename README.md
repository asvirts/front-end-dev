![Gif or Jif?](https://media.giphy.com/media/1ET7hRlCcZLuE/giphy.gif))

# Giphy Search

Find your next favorite GIF... the cool way

## How to use the app

- The home page provides 3 random trending GIFs.
- Use the search bar to access the entire Giphy library of GIFs, almost anything you can imagine is there (first prompt recommendation: 'the office chili')
- The app renders your searches out as .mp4 files, which is a video file
- You can left-click to copy the GIF url to your clipboard to share with your friends
- Alternatively, if you click navigate to /gifs (you can click the word "Gifs" above the search bar) they will be rendered as .gif files instead
- From there, you can right-click an image and select "Copy image" then paste the image directly into Teams, Slack, or wherever you are trying to share

## Tech stack

### Next.js 14 (with Turbopack!), React, Typescript, Tailwind, Vercel

- Uses Next.js 14 (with Turbopack!) to fetch data and handle things like routing
- Decided to use the App directory since it is the way of Next.js going forward
- React components are used for things like the back and next buttons, search bar, and GIF fetching
- Typescript is used and the Gif type is defined in the types.d.ts file
- Tailwind is used for styling along with some CSS modules for a couple of manual stylings
- Vercel handles the CI/CD for the app when changes are committed to the repo
