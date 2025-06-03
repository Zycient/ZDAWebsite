# ZDAWebsite
------
### Description
- The front-end code for the ***ZDA Website***: a website for the <b>ZDA Works</b> abstract media company run by *ZeroDayAnubis*.
  - This website serves as the center of information for *ZeroDayAnubis* and their abstract art. It shows the <u>history of ZDA's abstract artworks and inspirations</u>, as well as their **portfolio** of work, and information for art **commissions**.
  - Links to relevant social media, print shop, Ko-fi support/donations, and the Commission Request Form are provided.
### Technology
- This website leverages the following frameworks/libraries/tools:
  - *Node.js*: for launching the website on the backend
  - *Vite.js*: for tooling and compiling/building/bundling the JS/CSS/JSX and assets
  - *React.js*: for modular components and local state, used as the framework to enable a quick and easy Single-Page Application
  - *Tailwind CSS*: for modular CSS classes and powerful customization, and used to store ZDA themes in config 
  - *Joy UI*: a visual library for customized Material components and styles
    - Used for the navigation drawer and the loading spinner
  - *Radix UI*: another visual library focused on accessibility and portability
    - Used for the base for the dropdown Theme Menu, and some of the portable SVG icons 
  - *Recoil*: for easy and performant global state management
  - *Yet Another React Lightbox*: for well-scaled and useful photo galleries with decent customization
  - *React Router*: for pathname routing and error page support
  - *Vercel and Vercel KV*: for generous free web hosting, analytics, and Redis DB
### Setup/Maintenance
- Fork and Clone the repo at https://github.com/Zycient/ZDAWebsite
  - This uses Vite.js with the `react-ts` template. Use `npm start` to run a dev build (which will open a new tab in your last used browser), or use `npm run build` to compile a production build.
- Updating Images:
  - The images themselves are stored in `/public/assets/[section]/[folder]`.
    - Each section has its own folder path, and within are `lightbox` and `thumbnail` folders:
      - `lightbox`: for the *Yet Another React Lightbox*, which shows the higher quality photo on click.
        - To make the lightbox photo, each source photo is resized down to 65% of original resolution, and saved in JPEG at level 1 compression.
      - `thumbnail`: for the image shown on page pre-click.
        - To make the thumbnail photo, each source photo is resized down to a smaller resolution (around 600 to 1200px width, same ratio), and saved in JPEG at level 1 compression.
        - Additionally, each photo gets a blurred copy (Gaussian blur 100x radius, 3x), which is saved in JPEG at level 7 compression.
          - The blurred photo is the one initially shown, as a placeholder, while full thumbnail image loads.
  - When updating photos, you will also need to update the relevant arrays (for the section you picked) in `/src/lightboxInfo.ts` and `/src/thumbnailInfo.ts`. For each section, there is both the lightbox array (for the full size photo) and the thumbnail array (for the scaled down photos).
- Updating Routes:
  - Routes are essentially objects in the `router` array in the `main.tsx` file. You can add a route by adding another object with a `path` and an App component with a new `route` string argument. You can update a route by simply updating the `path` and `route` string argument as well.
  - You will also need to add/update the following:
    - *App.tsx*: ~line 26, add/update IF block
    - *HamburgerMenu.tsx*: add/update the Button components that use `switchPage` function
    - *PageLinks.tsx*: add/update the div and p elements that use `switchPage` function
- *Vercel KV NOTE*: Vercel KV is used to populate the Commissions Slots (Active, Waitlist, Status) in the `InfoBanner` component.
  - A `fetchData` function in `InfoBanner` queries the KV data store by using environment variables for the API URL and token, which are stored locally in `.env.development` and `.env.production`. These are NOT committed and will have to be created on your own.
  - When hosting on Vercel, you will also have to populate these environment variables in the Project Settings online as well, or else it will not work in production.
- *NOTE*: to force *Vite.js* to rebuild and reoptimize its dependencies and run a hard start, use `npm run hardstart`.
------
##### Examples Page
- To see the Commission Tiers Examples page you can do one of the following:
  - Go to the `/examples` route (or https://zerodayanubis.com/examples)
  - Run `npm run examples`
  - Click the Examples link in the Footer
------
##### Logo Page
- To see the ZDA Logo page you can do one of the following:
  - Go to the `/logo` route (or https://zerodayanubis.com/logo)
  - Run `npm run logo`
  - Click the **Z** logo in the top banner (left for tablet/desktop, center for phone)
------
##### Writings Page
- To see the Writings page you can do one of the following:
  - Go to the `/writings` route (or https://zerodayanubis.com/writings)
  - Run `npm run writings`
  - Click the Writings link in the Footer
------