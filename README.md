# Product Hunt App

A simple and modern web application that displays the most popular and most recent posts from [Product Hunt](https://www.producthunt.com/). Built with ReactJS, TypeScript, and Styled Components.

## ✨ Features

* 🔥 Tab for **Most Popular** posts
* 🆕 Tab for **Most Recent** posts
* ♾️ Infinite scroll
* ⚡ Built with **Vite**, **React 18**, and **TypeScript**
* 💅 Styled with **styled-components**
* ✅ Fully tested with **Jest** and **React Testing Library**

## 📸 Screenshots

| Popular Tab                                 | Newest Tab                                |
| ------------------------------------------- | ----------------------------------------- |
| Mobile ![image](https://github.com/user-attachments/assets/e47c929d-b6e4-45c9-999a-cf807a7305b1) | Mobile ![image](https://github.com/user-attachments/assets/846bd0c6-b1f3-4ffc-a034-b54900d12759)
| Web ![image](https://github.com/user-attachments/assets/922f9a6a-dc43-44fc-a65d-61ae82b5771c) | Web ![image](https://github.com/user-attachments/assets/c8f99daa-99a3-4194-b1c0-f35bf0ba202c)


## 💡 Tech Stack

* **ReactJS** with Hooks
* **Vite** for fast development and bundling
* **TypeScript** for type safety
* **Styled-Components** for scoped CSS-in-JS styling
* **Jest** + **React Testing Library** for unit testing
* **Product Hunt GraphQL API** for data fetching

## 📁 Project Structure

This project follows a modular and scalable folder structure using a **Feature-based** approach:

```
src/
├── api/                    # Axios setup and external API configs
├── components/             # Shared UI components
├── features/
│   └── posts/              # Posts logic (hooks, queries, types)
├── styles/                 # Global styled-components and theme setup
├── pages/                  # Main page component
├── App.tsx
├── main.tsx                
```

## ⚙️ Setup & Environment

This project uses the [Product Hunt GraphQL API](https://api.producthunt.com/v2/docs) and requires an API token.

### 1. Clone the repo

```bash
git clone https://github.com/csvinicius/product-hunt-app.git
cd product-hunt-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file

```env
VITE_PRODUCT_HUNT_TOKEN=your_product_hunt_api_token_here
```

To get your token:

* Log into [Product Hunt](https://www.producthunt.com/)
* Go to [https://www.producthunt.com/v2/oauth/applications](https://www.producthunt.com/v2/oauth/applications)
* Create a **Developer Token*
* Copy the token and paste it in the `.env` file

### 4. Run the app

```bash
npm run dev
```

## 🧪 Run Tests

```bash
npm run test
```

Tests are located under the same structure as the components they test, and follow Jest + RTL standards.

## ℹ️ Why this structure?

This project uses a **Feature-based folder structure**, which is a common best practice in modern React applications. It keeps related logic (e.g., components, hooks, types) grouped together, making it easier to maintain and scale as the app grows.

## 📌 Notes

* Pagination is handled via `cursor` using GraphQL's `pageInfo`
* Infinite scroll is triggered by the `IntersectionObserver` API
* `usePosts` is a custom hook that encapsulates the logic for fetching and paginating posts
* Error handling and loading states are covered

## 👨🏻‍💻 Author

Made with ❤️ by [Vinicius Sousa](https://www.linkedin.com/in/csvinicius/?locale=en_US)
