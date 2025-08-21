# 💰 NeedOfFunding - Crowdfunding Platform  

A modern, full-stack crowdfunding web application built with **Next.js 15** and **React 19**.  
This platform allows users to raise funds for personal, creative, or startup projects with integrated payment processing through **Razorpay**.  

---

## 🌟 Features  

### 🎯 Core Functionality  
- **GitHub Authentication** – Secure login/signup exclusively with GitHub OAuth via NextAuth.js  
- **Profile Management** – Complete user dashboard for customization  
- **Payment Integration** – Razorpay payment gateway for seamless transactions  
- **Fund Raising** – Create personalized funding pages for projects  
- **Real-time Payments** – Live payment tracking and donation display  
- **Responsive Design** – Mobile-first approach with TailwindCSS  

### 💸 Payment System  
- **Razorpay Integration** – Secure payment processing  
- **Multiple Payment Options** – Support for various payment methods  
- **Payment Verification** – Server-side payment validation  
- **Transaction History** – Complete payment tracking and history  
- **Donation Messages** – Supporters can leave messages with donations  
- **Real-time Updates** – Live payment count and amount raised  

### 🔐 User Management  
- **GitHub OAuth** – Secure authentication exclusively through GitHub  
- **Profile Customization** – Avatar, cover photos, and personal details  
- **Username System** – Unique username-based funding pages  
- **Dashboard** – Complete user management interface  
- **Security** – Protected routes and secure data handling  

### 📊 Database Integration  
- **MongoDB** – Robust database for user and payment data  
- **Mongoose ODM** – Elegant MongoDB object modeling  
- **Data Models** – Well-structured User and Payment schemas  
- **Real-time Sync** – Live data updates across the platform  

---

## 🛠️ Technology Stack  

### Frontend  
- **Next.js 15** – Latest Next.js with App Router  
- **React 19** – Modern React with latest features  
- **TailwindCSS 4** – Utility-first CSS framework  
- **NextAuth.js** – Authentication library for Next.js (GitHub provider only)  

### Backend  
- **Next.js API Routes** – Server-side API endpoints  
- **MongoDB** – NoSQL database for data storage  
- **Mongoose** – MongoDB object modeling  
- **Razorpay** – Payment gateway integration  

---

## 📸 Screenshots  

Here are some previews of the platform:  

- 🏠 **Home Page**  
  <img width="1911" height="1056" alt="image" src="https://github.com/user-attachments/assets/b3dfa40f-c630-4982-b4f4-b3fe33f1edc7" />

- 👤 **User Dashboard**  
  <img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/beeddcba-38b3-4d9d-930f-eb7ae6496bd2" />
  
- 💳 **Payment Flow**  
  <img width="1911" height="1427" alt="image" src="https://github.com/user-attachments/assets/ea4421fb-c46c-43ce-9b25-4c61463ba84b" />

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js v18+  
- MongoDB instance (local or Atlas)  
- Razorpay API keys  
- GitHub OAuth app credentials  

### Installation  

```bash
# Clone the repository
git clone https://github.com/your-username/NeedOfFunding.git

# Navigate to the project directory
cd NeedOfFunding

# Install dependencies
npm install

# Create a .env.local file and add your environment variables
NEXT_PUBLIC_URL=http://localhost:3000
MONGODB_URI=your_mongo_connection_string
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Run the development server
npm run dev
