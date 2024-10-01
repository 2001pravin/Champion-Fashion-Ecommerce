<div align="center">
  <br />
<!--   <img width="450px;" src="https://github.com/2001pravin/Vender-service-Management-System/assets/113687095/eea92a10-f03e-4c24-b170-51b828c8426e"/>
<!--     <a href="https://true-feedback-green.vercel.app/" target="_blank"> --> 
    <p style="font-size: 3.5rem; line-height: 2rem; font-weight: 700; margin-bottom: 1rem; color:white">
Champion-Fashion-Ecommerce</p>


  <br />

 
</div>

## 📋 <a name="table">Table of Contents:</a>
1. 📘 [Introduction](#introduction)
2. 🚀 [Features](#features)
3. 🛠️ [Tech Stack](#tech-stack)
4. ⚡ [Quick Start](#quick-start)
5. 🎥 [DEMO](#DEMO)
6. 🖼️ [Some Images](#Some-Images)
  


## <a name="introduction">📘 Introduction:</a>
Champion Fashion Ecommerce is an online platform that brings the iconic style and quality of Champion clothing directly to your fingertips. From classic hoodies and sweatshirts to trendy activewear and accessories, our store offers Champion's latest collections for men, women, and kids. Whether you're hitting the gym or stepping out in style, we've got you covered with comfortable, stylish apparel that reflects Champion's heritage.

## <a name="features">🚀 Features:</a>

👉 **Extensive Product Range:** A wide selection of Champion apparel, including hoodies, sweatshirts, and activewear.  

👉 **User-Friendly Navigation:** Intuitive interface for easy browsing.  

👉 **Secure Transactions:** Robust security for safe payments.  

👉 **Convenient Delivery:** Reliable shipping options to your doorstep. 

👉 **Real-Time Inventory Updates:** MySQL integration for instant product availability updates.  


## <a name="tech-stack">🛠️ Tech Stack:</a>
- React.js: A JavaScript library for building user interfaces.
- HTML5 & CSS3: Markup and styling languages for building web pages.
- JavaScript: A programming language for adding interactivity to web applications.
- Style-Components: A CSS framework for creating responsive and mobile-first designs.
- spring boot : Java, with Spring Boot for accelerated development and REST API for efficient communication, ensuring a robust and scalable architecture.
- Hibernate :  establishes a robust database connection, ensuring seamless data management and retrieval with efficiency and precision.
- spring security : Spring Security is implemented to enhance the security of the project.
- Git: A version control system for tracking changes and collaborating on projects.
- GitHub Pages: A platform for hosting and deploying web applications

## <a name="quick-start">⚡ Quick Start:</a>

 <b> - spring-backend</b>

Spring Boot Web Java backend application that exposes a REST API to
manage vendors. Its secured endpoints can just be accessed if an access
token (JWT) is provided.

spring-backend stores its data in a MySql database.

spring-backend has the following endpoints


<b>-react-frontend</b>

ReactJS frontend application where users can find and save hobbies and businesses can manage offers. In order to access the application, user / business must login using his/her username and password.  All the requests coming from react-frontend to secured endpoints in spring-backend have a access token (JWT) that is generated when user / business logs in.

react-frontend uses Semantic UI React as CSS-styled framework.

<b>Prerequisites</b>
<hr>

-Java 11+

-npm

-JWT 

<b>Set up</b>

<hr></hr>

Clone the repository:

<pre>git clone https://github.com/2001pravin/Champion-Fashion-Ecommerce.git</pre>

Navigate to the newly created folder:

<pre>cd  Champion-Fashion-Ecommerce</pre>
 

<b>Frontend -</b>

Install NodeJs.v.16.13.1 /npm v.8.3.0

Navigate to frontend subfolder:
 
<pre>cd frontend</pre>

Install the modules

<pre>npm i</pre>

Start the application on local host:

<pre>npm start</pre>

Navigate to:

http://localhost:4200

 
<b>Backend -</b>
Install JDK 18.0.2.1

Navigate to Backend subfolder:

<pre>cd Backend</pre>


The project has the following endpoints:


NOTE: Testing API 

-/signup (create client-user) or /register (create business-user)

-/authenticate (returns JWT authentication token)

-use JWT token in order to authorize access to secured endpoints (click the lock icon or use the Authorize button on the upper right corner - then paste JWT Token )

NOTE: /notification endpoint will return an internal server error if you don't specify spring.mail credentials first.

<pre>The backend will run on http://localhost:8080 </pre>

<b>Spring Mail</b>

Make sure to specify a valid spring.mail.username and spring.mail.password in the application.properties file in order to be able to send an Email confirmation for updating user entries.

IMPORTANT: if you decide not to specify mail credentials, you will get javax.mail.AuthenticationFailedException. The rest of the application should work normally despite this exception.         


## <a name="DEMO">🎥 DEMO:</a>
https://github.com/2001pravin/Vender-service-Management-System/assets/113687095/9cc7720e-6651-41fd-b299-fe995868d87c

## <a name="Some-Images">🖼️ Some-Image:</a>
<img width="450px;" src="https://github.com/2001pravin/Vender-service-Management-System/assets/113687095/eea92a10-f03e-4c24-b170-51b828c8426e"/>
<img width="450px;" src="https://github.com/2001pravin/Vender-service-Management-System/assets/113687095/ec9595ae-ee51-41ec-9b87-d64134f8b675"/>
<img width="450px;"  src="https://github.com/2001pravin/Vender-service-Management-System/assets/113687095/d452fd3d-701d-4059-8c7d-ee6d89ea5d99"/>

