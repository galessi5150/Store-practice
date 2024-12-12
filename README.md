# Redux Store Practice

This is a simple project I created to practice using **Redux** for state management in a React app. The goal was to manage the state of a user's subscription status (Subscribed or Not Subscribed) using Redux.

## How It Works

- **State**: The app keeps track of a boolean state:
  - `true` means **subscribed**
  - `false` means **not subscribed**

- **Actions**: 
  - `subscribe` to set the state to `true`
  - `unsubscribe` to set the state to `false`

- **Reducers**: The actions modify the state in the Redux store when dispatched.

- **React-Redux**: I used `useSelector` to read the state and `useDispatch` to trigger actions when a button is clicked.

## 🛠️ Project Setup

### 1. Install Dependencies:
First, create a new React app if you haven't already, then install **Redux Toolkit** and **React-Redux**.

```bash
npx create-react-app redux-subscription-app

cd redux-subscription-app

npm install @reduxjs/toolkit react-redux
