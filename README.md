
# Node REST Server Project

### Project Structure

Main structure of node.js project. Folders / files:

- <b>postmanRequests</b>. 
- <b>public</b>.
    - <b>views</b>.
        -<b>index.pub</b>.
- <b>src</b>:
    - <b>middlewares</b>
        -<b>middleware.js</b>.
    - <b>multer</b>
        -<b>multer.js</b>.
    - <b>uploads</b>
    - <b>app.js</b>. Entry point.
- <b>.gitignore</b>.
- <b>.info.txt</b>.
- <b>package.json</b>.

### Import project for use with Visual Studio Code and execute it

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone https://github.com/oscarvargas4/itacademy-sprint3-restapi.git
  ```
* Open the project to the correct file, run he command in the console.
  ```
  cd [<Some Path>/nodeRestServer]
  ```
* Install npm packages:
  ```
  npm install
  ```
* Install HTTP Requests on Postman:
1. Open Postman
2. File -> Import -> Upload File: "./postmanRequests/postman.JSON" from this porject
3. Keep Postman open in order to do the HTTP requests
* Run the command for execute the app (Be sure your terminal is located in $/nodeRestServer file):
  ```
  node src/app.js
  ```


### Utilities

* [Cache headers article](https://regbrain.com/article/cache-headers-express-js)
* [CORS article (Cross-origin resource sharing)](https://stackabuse.com/handling-cors-with-node-js/)

