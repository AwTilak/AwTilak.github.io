let projects = [
    {
        id: 1,
        projectName: "Corona case Tracker",
        category: "venilaJs",
        img: "./images/corona.png",
        desc: "This application that allows us to track daily record of corona infected persons and display total cases. This is build with html,bootstrap,js.",
        demo: "https://hellocorona.netlify.app",
        source: "https://github.com/AwTilak/venilaJs/tree/main/coronaCases",
    },

    {
        id: 2,
        projectName: "Budget Expense App ",
        category: "venilaJs",
        img: "./images/expens-budget.png",
        desc: " This application that allows us to maintain the record of daily budget expeses. Which help me alot during college. This is build with html,css,js",
        demo: "https://budget-expenses-app.netlify.app",
        source: "https://github.com/AwTilak/venilaJs/tree/main/budget_expense",
    },
    {
        id: 3,
        projectName: "GroceryList App",
        category: "venilaJs",
        img: "./images/groceryList.png",
        desc: "This one is most used for my family during grocery shopping, This maintain the list of grocery and easily searchable. Mainly styling with Tailwindcss ",
        demo: "https://listcreate.netlify.app",
        source: "https://github.com/AwTilak/venilaJs/tree/main/groceryList",
    },
    {
        id: 4,
        projectName: "Filter and Search  products",
        category: "venilaJs",
        img: "./images/filter-search.png",
        desc: "This application is none of the part of my E-commerce project for local clothing shop for filter and search products",
        demo: "",
        source: "https://github.com/AwTilak/venilaJs/tree/main/filter-search",
    },
];

const projectSection = document.querySelector('#products');

let buttons = document.querySelectorAll(".button-value");
window.addEventListener("DOMContentLoaded", function () {
    display(projects);
});


// filter buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        let category = e.target.dataset.filter;
        // console.log(category)
        // take category from project
        let projectCategory = projects.map((item) => {
            if (item.category === category) {
                // console.log(category);
                return `<div class="card">
                <div class="face face1">
                    <div class="content">
                        <div class="image">
                            <img src="${item.img}" alt="expens-budget">
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <h3>
                            ${item.projectName}
                        </h3>
                        <p>${item.desc}</p>
                    </div>
        
                    <div class="btns">
                        <button class="demo-btn btn"><a href="${item.demo}" target="_blank">Demo</a></button>
                        <button class="src-btn btn"><a href="${item.source}" target="_blank">Source</a></button>
                    </div>
                </div>
            </div>`;;
            }
        });
        projectCategory = projectCategory.join("");
        projectSection.innerHTML = projectCategory;
        if (category === "all") {
            display(projects);
        }
    })

});

// display all the cards
function display(projectItem) {
    let displayProject = projectItem.map((item) => {
        // console.log(item);
        return `<div class="card">
        <div class="face face1">
            <div class="content">
                <div class="image">
                    <img src="${item.img}" alt="expens-budget">
                </div>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <h3>
                    ${item.projectName}
                </h3>
                <p>${item.desc}</p>
            </div>

            <div class="btns">
                <button class="demo-btn btn"><a href="${item.demo}" target="_blank">Demo</a></button>
                <button class="src-btn btn"><a href="${item.source}"target="_blank">Source</a></button>
            </div>
        </div>
    </div>`;
    });
    // console.log(displayProject.join(""))
    displayProject = displayProject.join("");
    projectSection.innerHTML = displayProject;
}




// usig keyup event
const searchInput = document.getElementById("search-input");
searchInput.addEventListener('keyup', function (e) {
    let inputValue = e.target.value.toLowerCase();
    // console.log(inputValue);

    const filteredProject = projects.filter((element) => {
        return (element.projectName.toLowerCase().includes(inputValue) || element.desc.toLowerCase().includes(inputValue) || element.category.toLowerCase().includes(inputValue));
    });
    // console.log(filteredProject);
    display(filteredProject);
});