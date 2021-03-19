//console.log('SpaceX');

/**
 What is an API?
   - API Stands for Application Programming Interface
   -API's allow applications to communicate with eachother
   - It is an access point to the server, what we call an 'endpoint'
   -Ex. https://localhost/signin
                         (endpoint)

                             ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous 
        programming
            - in the case of fetching data from an outside source like we do with an API, 
            if JavaScript did not have the ability to run code asynchronously, it would have to 
            run each line of code > wait for the response from the API > and then finish running 
            the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing 
            at a time

        - Asynchronous programming allows our code to continue to run while we're waiting on a 
        response from an API. Once the fetch has finished retrieving the data, it then presents 
        us with that data, without having to wait on any other processes

        - the fetch() method is an asynchronous method, and is part of the browser window, not 
        JavaScript

        - the fetch() method starts the process of fetching a resource from the network, and will 
        return a promise which is fulfilled once the response is available.

            - a promise represents a value that is unknown when the promise is created, but 
            represents the eventual fulfilled value or rejection (error)
                - a promise is always one these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed

            - in the case of a fetch request, a promise will resolve into a Response object that 
            represents the response of the request made.
 */

            /**
             parts of a fetch()


              (1)              (2)
             fetch ('https://localhost/dogs')
                    (3)              (4)
             
             .then( (result) => result.json() )

             .then( ( json ) => console.log(json) )

             .catch( ( erros ) => console.log(error) )

             */

             const baseURL = 'https://api.spacexdata.com/v2/rockets'

             const searchForm = document.querySelector('form');
             const spaceShips = document.querySelector('ul');

             searchForm,addEvenListener('submit', e => fetchSpace(e));

             function fetchSpace() {
                console.log(e)
                e.preventDefault();

             }