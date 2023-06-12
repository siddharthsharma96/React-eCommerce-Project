#in this i have created a ui in this i have used react and for every component i created a different component in i have used 
props which means properties to parse the data from parent component to child component and props are like html attributes
then i have used useState hook for in this we have to use two arguments 1st argument is used initial value then second argument 
is used to change theintial value dynamically & the main role of use state is for making dynamic data and in this we don't pass 
this to child component and then i have used useEffect hook which is a an another important hook i have used this to handle the 
Side effect in this also we have to use two argument  but in this we have to pass 1st argument as function and second argument 
is  array of dependencies and its optional in this we don't pass second argument then useEffect hook will be run only first time 
at the time of rendering of component if we want to run this again then we have to pass the array when the dependcy array 
variables changed the hook will be rendered again so I used this when i want data from databaseand useEffect hook i have used 
two different approaches one is 1 st is by using web fetch api in this we have used promise two times 1st for getting the 
response and then for getting the data and other way is axios which is a 3rd party library in this we have to use promise once 
only & in this first i have used .then and .catch promise to handle the api then i have async await method to get the response 
