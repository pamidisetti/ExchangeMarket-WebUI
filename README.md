# ExchangeMarket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Identified JSON Payloads for Request and Response


Request for verifyUser:

	{
		"username":"9889878672"
	}


response of verifyUser:

	{
	"isRegistred":true
	}

request to Authentication:

	{
		"username":"9889878672",
		"password":"",
		"OTP":9087
	}

reponse to Authentication:

	{
		userprofile:{
			"userId":"10001"
			"firstname":"jhon",
			"lastname":"deo",
			"mobile":"9878675653",
			"email":"example@google.com",
			"location":"hyderabad",
			"thumbnail":"couldcnd.com/jsdhjj/jsdjsgghgh.jpg"
			"preferences":{
				"notifications":false,
				"showrecentViewed":true,
				"chatToEveryone":true,
				"callToEveryone":true
			},
			"notifications":[
				{
					"id":"01",
					"isRead":true,
					"message":"some message"
				},
				{
					"id":"02",
					"isRead":false,
					"message":"some other message"
				}
			],
			"isUserVerified":true,
			"feedbackStats":3
		}
	}


Edit user Profile:

request for Change Profile:

    {
    "userprofile":{
        "userId":"10001",
        "firstname":"jhon",
        "lastname":"deo",
        "mobile":"9878675653",
        "email":"example@google.com",
        "location":"hyderabad",
        "thumbnail":"couldcnd.com/jsdhjj/jsdjsgghgh.jpg"
    }
    }

response for Change Profile:

    {
    "success":true,    
    "userprofile":{
        "userId":"10001",
        "firstname":"jhon",
        "lastname":"deo",
        "mobile":"9878675653",
        "email":"example@google.com",
        "location":"hyderabad",
        "thumbnail":"couldcnd.com/jsdhjj/jsdjsgghgh.jpg"
    }
    }


request for Change Preference:

    {
    "userprofile":{
        "userId":"10001",
        "notification || chat || call || recentVisited":true
        }
    }

response for Change Preference:

    {
        "success":true,
        "notification || chat || call || recentVisited":true
    }

/getPostedAds


