
// function of this page if any user searching on app get the thier info;
// async function is always return value in the form of promisess


async function getData(user) {
    
    try {
         let response = await fetch(`https://api.github.com/users/${user}`);

     // add url here make sure u are passing argument and proper url for making url dynamic
     // use ${} this syntax always use try catch block for avoid error get data step
        console.log(response);
        let data = response.json();
        return data;              // collecting data step 

    }
    catch (error) {
        console.log(error);
    }
   
}

export default getData;

// step1 make async function 
// step 2 fetch data from api data base
// step 3 collect data in varaible 
// step 4 export data whenever used
