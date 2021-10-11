#### How lounch the App on localhost:
1) git clone git@github.com:haleksandr/wwwest-silutions.git
2) cd wwwest-solutions
3) npm i
4) npm start

### Credentials:<br/>
email: admin@gmail.com<br/>
password: 123456<br/>
>I changed the profile login settings as for firebase must be email/password not username/password and password must be at least 6 characters.

### Pages: <br/>
**/** - main page.<br/><br/>
**/profile** - this page has the guard security. When opening profile page as unauthorized user queryParams - loginWarn is added to the address bar and ***"You cannot get to the profile page until you login"*** validation message displays.<br/><br/>
**/news** - it is not necessary to be logged in to get to this page. A get request goes to newsapi.org and 20 news items are displayed when opening this page.<br/><br/>
**/login** -  when you go to this page there is a form in which you need to enter your email and password. This form also has validation. The email and password fields are required - if you click on the field and then remove the focus from it the ***"Email is required!/Password is required"*** validation message is displayed. Also, if you enter an invalid email the ***"Email is not valid!"*** validation message is displayed. If you enter an invalid email and a valid password the ***"No such email!"*** validation message is displayed and the field that contains the error will be highlighted in red, if you enter a valid email and an invalid password the ***"Invalid password!"*** validation message is displayed. Also, until the correct email and the password contains more than 4 characters is entered the "Login" button is disabled. After entering correct email, password and clicking the "Login" button the "Login" button will be disabled until a response from the server about successful authorization or error is received to avoid multiple clicks the "Login" button while the server is processing the request. After successful authorization, 2 tokens will be written to loalStorage: (token and token-exp), token-exp lasts an hour, after which it will need to be re-logged. Both tokens are removed from localStorage when the logout button is clicked. Also, after successful authorization, you can go to the '/profile' page.<br/><br/>
**/404** - a component will be displayed that says that this page was not found and offers to return to the home page if entering an incorrect route after "http://localhost:4200/" in the search bar


