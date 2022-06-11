import axios from "axios";

// const masterDiv = document.createElement("div");
// masterDiv.classList.add("topics");

const Tabs = (topics) => {

  // const tab = document.createElement("div");
  // tab.classList.add("tab");
  // tab.textContent = topics;
  // masterDiv.appendChild(tab);
  const masterDiv = document.createElement("div");
  masterDiv.classList.add("topics");
  topics.forEach(elem => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = elem;
    masterDiv.appendChild(tab);
  })
  // const tab1 = document.createElement("div");
  // const tab2 = document.createElement("div");
  // const tab3 = document.createElement("div");
  // const tab4 = document.createElement("div");
  // const tab5 = document.createElement("div");

  // tab1.classList.add("tab");
  // tab2.classList.add("tab");
  // tab3.classList.add("tab");
  // tab4.classList.add("tab");
  // tab5.classList.add("tab");
  // tab1.textContent = topics[0];
  // tab2.textContent = topics[1];
  // tab3.textContent = topics[2];
  // tab4.textContent = topics[3];
  // tab5.textContent = topics[4];
  // masterDiv.appendChild(tab1);
  // masterDiv.appendChild(tab2);
  // masterDiv.appendChild(tab3);
  // masterDiv.appendChild(tab4);
  // masterDiv.appendChild(tab5);
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return masterDiv;
}
// console.log(axios.get(`http://localhost:5001/api/topics`));
const tabsAppender = (selector) => {
  const tabsPlace = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/topics`)
    .then(res => {
      // console.log(res.data.topics)
      // res.data.topics.forEach(elem => {
      //   tabsPlace.appendChild(Tabs(elem));
      // })
      tabsPlace.appendChild(Tabs(res.data.topics));
    })
    .catch(err => {
      console.log("error");
    })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
