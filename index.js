// This code selects an element by its ID, creates a message including today's date using the `Date` object,
// and then updates the text content of the selected element to display the message.
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);



// This code allow the user to enter a goal and add it to a list.
// If it detects a duplicate it displays a message stating that the goal already exists
// The code also allows you to remove goals from the list by clicking on it
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    let arrGoals = goalList.children;

    // This section of the code check wheter there is any duplicates by continuously going through each item in the 
    // list one by one untill a duplicate is found
    let isDuplicate = false;
    for (let i = 0; i < arrGoals.length; i++) {
        if (goalInput === arrGoals[i].textContent) {
            isDuplicate = true;
            break;
        }
    }

    // This section of the code prevents you from adding duplicates by displaying an alert message
    // whenever the user adds a duplicate
    if (isDuplicate) {
        alert('Duplicates: This goal already exists.');
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
        newGoal.onclick = ()=>{
            newGoal.remove();
        }
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
