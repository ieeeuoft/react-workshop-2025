# React Workshop Guild
This repo contains all the resources we used during the frontend workshop for IEEE Newhacks 2024

We build the following Apps as Milestones

* Milestone 1: Counter using React and style it using Tailwind CSS
* Milestone 2: Exchange rate App by fetching API

##  1. Node.js Installation
1. Download Node.js

   Visit the official Node.js website (https://nodejs.org)

   Download the LTS version

   Make sure the operating system you select is correct!


2. Install Node.js

   Windows: Run the download installer. Follow the installation wizard. Ensure you have selected the option to install Node.js and npm (Node Package Manager)

   Mac: Open the downloaded .pkg file. Follow the prompts to complete the installation

3. Make sure that Node.js is installed properly

   Check that these commands work:

   `node -v`

   `npm -v`



## 2. Setup
1. Create a new folder on your laptop
2. `cd` into the new folder
3. Run `git clone https://github.com/guaaaaa/React_workshop.git`
4. Run `cd React_workshop`
5. Run `npm install`
6. Run `npm run dev`. You should be able to see the App at http://localhost:3000 after running this command
7. Create an account at https://manage.exchangeratesapi.io
8. Navigate to https://manage.exchangeratesapi.io/dashboard, you should see your API access key. This key is confidential, **DO NOT SHARE IT WITH ANYONE OR COMMIT IT TO A GITHUB!!!** We'll be using this key later

<img width="841" alt="Screenshot 2024-10-26 at 08 58 46" src="https://github.com/user-attachments/assets/f665888c-2ab0-4b99-84c2-3eb43ca59279">


## 3. Repo structure
The repository has four branches - `master`, `counter`, and `solution`. Each branch corresponds to a milestone for the workshop


#### The `master` branch
The `master` branch is a template for participants to follow during the workshop. It contains a home page and a broken version of the counter that we were building on top of during the workshop. If you run `npm run dev`, you should see the following pages, and you should be able to navigate around the home page and the counter

* The home page

<img width="974" alt="Screenshot 2024-10-26 at 08 53 45" src="https://github.com/user-attachments/assets/793bcfcf-4ffb-4772-b523-f7f2bb53cac6">

* The broken counter

<img width="636" alt="Screenshot 2024-10-26 at 08 54 29" src="https://github.com/user-attachments/assets/032ac97b-1740-40af-b9b5-f0b4311bc80a">

To navigate to the `master` branch, run `git checkout master`


### The `counter` branch
The `counter` branch contains the counter App. If you run `npm run dev`, you should see the home page and be able to navigate to the counter. You can play around with the counter!

<img width="1426" alt="Screenshot 2024-10-26 at 11 19 53" src="https://github.com/user-attachments/assets/620678a4-99ba-4bf3-a888-4654e056ac7d">


To navigate to the `counter` branch, run `git checkout counter`


### The `solution` branch
The `solution` branch primarily serves as a solution reference to the workshop. It contains the code of everything we built during the workshop. 

To use the solution code
1. Copy your own API access key from https://manage.exchangeratesapi.io/dashboard
2. Inside your working directory (`React_workshop`), create a file called `.env.local`
3. Inside the file, add the following line `NEXT_PUBLIC_API_KEY = your API access key`. Replace `your API access key` with your own API access key

Now, if you run `npm run dev`, you should see the following page and be able to navigate around the counter, exchange rate App, and the home page.

<img width="843" alt="Screenshot 2024-10-26 at 11 20 36" src="https://github.com/user-attachments/assets/edfa8576-d965-4ae3-9ed1-9b5bb5807963">

To navigate to the `solution` branch, run `git solution exchange`


## 4. Final project

The final App should have the following pages

* Home page
<img width="908" alt="Screenshot 2024-10-26 at 08 47 31" src="https://github.com/user-attachments/assets/6cb0df51-4685-4f4e-a2dd-1314f669587d">

* Counter
<img width="1410" alt="Screenshot 2024-10-26 at 11 21 12" src="https://github.com/user-attachments/assets/7636e12b-6d3e-4466-aad9-a17734c88bee">

* Exchange rate App
<img width="1414" alt="Screenshot 2024-10-26 at 11 21 33" src="https://github.com/user-attachments/assets/e8885e56-f11a-4f05-9db1-c899dd05402d">

