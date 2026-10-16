
// const user = {
//   name: "Alex",
//   skills: ["JavaScript"]
// };
// const coppy = structuredClone(user);

// const copy = { ...user,
//     skills: {...user.skills}
//  };

// copy.skills.push("TypeScript");

// console.log(user.skills);

// // const copyy = user;
// // user.name = "mehedi"
// // console.log(copyy)





const tasks = [
  { id: 1, title: "Learn JS", done: true },
  { id: 2, title: "Build API", done: false },
  { id: 3, title: "Write tests", done: false }
];



function getPendingTitles(tasks) {
 return tasks
  .filter(task => task.done === false)
  .map(task => task.title)
}

console.log(getPendingTitles(tasks));





async function loadUsers() {

  const response = await fetch("/api/users");

  if(!response.ok){
    throw new Error (`HTTP error: ${response.status}`);
  }

  const data = await response.json();


  return data;
}