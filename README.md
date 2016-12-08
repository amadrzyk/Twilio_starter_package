#Twilio Starter Package

##Set up

1. Download this package
2. Make an account on Twilio 
3. Replace the Account Sid and AuthToken with your respective keys 
4. Authenticate your personal number on Twilio
5. Replace the TO and FROM numbers with your personal number and (free) Twilio number respectively  
4. Move ngrok to $PATH with command `mv ngrok /usr/local/bin` (You will only do this once, you'll be able to run ngrok anywhere on your computer)
5. Run `node app.js` 
6. Also run `ngrok http 1337`


###Preface
- The node server runs on port 1337, ngrok just gives you a public interface for external apps to use.


## How to use

- You can now access your server locally by going to `localhost:1337`
- Or you can access the server from a public server via `http://820187c0.ngrok.io` as per the screenshot below 
![alt tag](ngork_screen.png)
- Access `localhost:1337/pizzatext` to send yourself a simple pizza text
- Access `localhost:1337/pizzacall` to receive a demo call =)

##TODO
- Easy way to upload xml file to change calling script
- Integrate calling feature with texting to develop a complex app 