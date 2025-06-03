# LMS Frontend

### Setup Instructions

1. Clone the project
```
    git clone https://github.com/Rohitiwari297/LMS-Frontend_.git
```
2. Move into the directory
```
    cd LMS-Frontend_
```
3. install dependencies
```
    npm i
```
4. run the server
```
    npm run dev
```

### Setup instructions for tailwind
[Tailwind official instruction docs](https://tailwindcss.com/docs/instruction)

1. Install tailwind css
```
    npm install -D tailwindcss@3
```
2. Create tailwind.config.js file
```
    npx tailwindcss init
```

3. Add file extenstions to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
### Adding plugins and dependencies
```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
