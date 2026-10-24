# Java Programming Laboratory Record - S. Sesha Sathvik (25EU02118)

React + Vite website for the Java Programming Laboratory (AIML, Section B). Red theme.

## Run locally
1. Install Node.js, then open this folder in VS Code.
2. `npm install`
3. Copy your PDFs into `public/pdfs/` (names below).
4. `npm run dev` and open the link shown (usually http://localhost:5173).
5. `npm run build` to check the production build.

## PDF file names (exact)
week1.pdf, week2.pdf, week3.pdf, week6.pdf, week7.pdf, week8.pdf, week9.pdf, week10.pdf, week11.pdf, week12.pdf
Weeks 4 and 5 have no tasks, so they have no PDFs.
A "View PDF" button appears only when the file really exists. Otherwise the card says "The PDF has not been added yet."

## Edit content
Titles, descriptions and status are in `src/data/labs.js`.

## GitHub
1. Create an empty repository on github.com.
2. In the project folder run: `git init`, `git add .`, `git commit -m "Java lab record"`, `git branch -M main`, `git remote add origin <your-repo-link>`, `git push -u origin main`

## Deploy on Vercel
Log in at vercel.com with GitHub, choose Add New > Project, import the repository (Framework: Vite, Build: `npm run build`, Output: `dist`) and click Deploy.
