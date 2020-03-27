## dynamic-rendering-app

> Simple web app to test dynamic rendering with [rendertron](https://github.com/weaponsforge/rendertron/).

### Prerequisites

1. NodeJS
	- node version 10.16.3
	- npm version 6.9.0
2. Windows OS 64 bit (optional)
3. Dynamic Processor *(optional)*
	- see the [rendertron](https://github.com/weaponsforge/rendertron/) server repository for more information
	- You can use [https://rendertron-dev.herokuapp.com/](https://rendertron-dev.herokuapp.com/render) (rendertron) or deploy your own
	- Other dynamic processors to choose from:
		- [Puppeteer](https://developers.google.com/web/tools/puppeteer/)
		- [Prerender.io](https://prerender.io/)
		- [Rendertron](https://github.com/GoogleChrome/rendertron#installing--deploying)


## Usage

1. Clone this repository.  
`git clone https://github.com/weaponsforge/dynamic-rendering-app.git`

2. Install dependencies.  
`npm install`

3. Run the local web server.  
`npm run start`

4. Load the sampe js website on a web browser.  
`http://localhost:3000`



## Live Demos

Test the following websites on the [Mobile Friendly](https://search.google.com/test/mobile-friendly) test tool and other tools to see the difference between a normal and dynamic-rendered website.

- **Normal Static Website**  
[https://dynamic-rendering-app.web.app/](https://dynamic-rendering-app.web.app/)

- **Dynamic-rendered Website**  
[https://rendertron-dev.herokuapp.com/](https://rendertron-dev.herokuapp.com/)



@weaponsforge  
20200327