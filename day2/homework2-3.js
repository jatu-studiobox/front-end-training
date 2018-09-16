let peopleAll = [];

let peopleFilter = [];

let peopleResult = [];

// Read homework1.json
fetch('homework1-4.json').then(response => {
        return response.json();
    })
    .then(myJson => {
        peopleAll = myJson;
        peopleAll.filter(peoples => {
                //console.log(peoples["gender"]);
                return peoples["gender"] === "male" && peoples["friends"].length >= 2;
            })
            // First Solution
            /*
            .map(people => {
                //console.log(i.name);
                let newPeople = {};
                if (people.name, people.gender, people.company, people.email, people.friends, people.balance) {
                    newPeople["name"] = people.name;
                    newPeople["gender"] = people.gender;
                    newPeople["company"] = people.company;
                    newPeople["email"] = people.email;
                    newPeople["friends"] = people.friends;
                    newPeople["balance"] = people.balance;
                }
                //console.log(a);
                peopleFilter.push(newPeople);
            });
            */
            // Second Solution
            .map(people => {
                let newPeople = {
                    "name": people.name,
                    "gender": people.gender,
                    "company": people.company,
                    "email": people.email,
                    "friends": people.friends,
                    "balance": people.balance
                };
                peopleFilter.push(newPeople);
            });
        peopleFilter.map(i => {
            // Calculate new balance
            let balanceParts = (parseFloat(i["balance"].substr(1).replace(/,/g, '')) / 10).toString().split(".");
            balanceParts[0] = balanceParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            i["balance"] = "$" + balanceParts.join(".");
        });
        console.log(peopleFilter);
    })
    .catch(error => {
        console.error('Error:', error);
    });