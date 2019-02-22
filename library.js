// 1. write a get route '/characters' that returns all characters
// 2. write a get route '/characters' which accepts a name as an extra url param and returns a specific character based on the parameter
// 3. amend the get route '/characters' so that it additionally accepts a query argument `filter` which filters the returned character list by department

const characters = [
  {
    characterName: "Leslie Knope",
    playedBy: "Amy Poehler",
    jobTitle: "assistant manager",
    department: "parks and rec",
    bestFriend: "Ann Perkins"
  },
  {
    characterName: "Ron Swanson",
    playedBy: "Nick Offerman",
    jobTitle: "manager",
    department: "parks and rec",
    bestFriend: "bacon and eggs"
  },
  {
    characterName: "Ann Perkins",
    playedBy: "Rashida Jones",
    jobTitle: "nurse",
    department: "hospital",
    bestFriend: "Leslie Knope"
  }
];
