// const task = document.getElementById('task');
// const catagory = document.getElementById('catagory');
// const Add = document.getElementById('Add');
// const Delete = document.getElementById('Delete');
// const AddElement = document.getElementById('entered');
// const removeElement = document.getElementById('entered');


// let add = function (e) {
//     const taskAdd = task.value;
//     const catagoryAdd = catagory.value;
//     localStorage.setItem(catagoryAdd, taskAdd)
// }
// Add.addEventListener('click', add);
// Delete.addEventListener('click', function (e) {
//     const taskRemove = task.value;
//     const catagoryRemove = catagory.value;
//     let temp = confirm("You want to delete Task?")
//     if (temp) {
//         localStorage.removeItem(catagoryRemove, taskRemove)
//     }
// });

const task = document.getElementById('task');
const catagory = document.getElementById('catagory');
const Add = document.getElementById('Add');
const Delete = document.getElementById('Delete');
const AddElement = document.getElementById('entered');
const removeElement = document.getElementById('entered');

let add = function () {
    const taskValue = task.value;
    const catagoryValue = catagory.value;

    // Get the existing data from localStorage
    let storedData = localStorage.getItem(catagoryValue);
    let dataArr = storedData ? JSON.parse(storedData) : [];

    // Add the new task to the array
    dataArr.push(taskValue);

    // Store the updated array back in localStorage
    localStorage.setItem(catagoryValue, JSON.stringify(dataArr));

    AddElement.textContent = `${taskValue} Entered in storage`;
};

Add.addEventListener('click', add);

Delete.addEventListener('click', function () {
    const inputValue = task.value;
    let temp = confirm("Want to remove item?");
    if (temp) {
        const catagoryValue = catagory.value;

        // Get the existing data from localStorage
        let storedData = localStorage.getItem(catagoryValue);
        let dataArr = storedData ? JSON.parse(storedData) : [];

        // Find and remove the task from the array
        let index = dataArr.indexOf(inputValue);
        if (index !== -1) {
            dataArr.splice(index, 1);
        }

        // Store the updated array back in localStorage
        localStorage.setItem(catagoryValue, JSON.stringify(dataArr));

        removeElement.textContent = `${inputValue} removed from storage`;
    }
});
