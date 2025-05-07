
# 💸 Quick Pay

Quick Pay is a modern and secure utility bill payment platform that enables users to pay for electricity, gas, internet, credit cards, tuition, and more — all from one convenient dashboard. Built with React router and Firebase, it ensures real-time transaction tracking, balance updates, and an intuitive interface for seamless payments.

🔗 **Live URL:** [https://quick-pay-bd.netlify.app](https://quick-pay-bd.netlify.app)

🖼️ **Preview:** ![Quick Pay Preview](https://i.ibb.co.com/7tVdwh6x/quick-pay-mockup.jpg)

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Email/Password & Google Sign In)
- 🧾 Pay bills like electricity, internet, gas, and credit card
- ✅ Prevent duplicate bill payments
- 📊 View balance, transaction status, and bill due dates
- 📌 Dynamic blog section with detailed blog pages
- 📥 Password reset via email
- 🔔 Toast notifications for key actions
- 🌙 Responsive and modern UI using Tailwind CSS

---

## 🧰 Technologies Used

| Technology        | Description                                          |
|-------------------|------------------------------------------------------|
| React             | JavaScript library for building UIs                  |
| React Router      | Declarative routing for React apps                   |
| Tailwind CSS      | Utility-first CSS framework                          |
| Firebase Auth     | User authentication (Email/Password, Google OAuth)   |
| React Hot Toast   | Lightweight and customizable toast notifications     |
| React Icons       | Icon library with popular icon sets                  |
| React Countup     | Counter animation for displaying balance stats       |

---

## 🛠️ Getting Started

### ⚙️ Prerequisites

Node.js and npm installed on your system

### 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/programming-hero-web-course1/b11a9-react-authentication-omarfaruk-dev
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install React Router:**

```bash
npm install react-router
```

4. **Install Tailwind CSS:**

```bash
npm install tailwindcss @tailwindcss/vite
```

5. **Install Firebase:**

```bash
npm i firebase
```
5. **Install SwiperJS:**

```bash
npm i swiper
```

6. **Install Toast & Additional Packages:**

```bash
npm install react-hot-toast react-icons react-countup
```

---

## 📁 Project Structure Highlights

```
src/
│
├── components/       # Reusable components like NavBar, Footer
├── context/          # AuthContext and AuthProvider logic
├── pages/            # Page-level components (Home, Blog, BillDetails)
├── routes/           # Route setup with useLoaderData, useParams
└── firebase/         # Firebase config and init
```

---

## 🔑 Authentication Features

- Firebase Email/Password Login
- Google Sign In with Firebase Provider
- Reset Password via Firebase's `sendPasswordResetEmail`

---

## 📚 Blog Section

- Blog list includes dynamic categories like Electricity, Internet, Credit Card, etc.
- First row features a highlighted post, followed by a grid layout
- Blog details rendered using `useParams` and `useLoaderData`

---

## 🧪 Payment Logic

- `Pay Bill` button triggers balance deduction
- Payment status is stored and conditionally rendered
- Toast notifications indicate success or errors
- State is saved in `localStorage` to persist on page reload

---

## 📞 Contact

If you want to collaborate or have suggestions:

###  [Github](https://github.com/omarfaruk-dev)
###  [Linkedin](https://www.linkedin.com/in/pro-omarfaruk)

---

