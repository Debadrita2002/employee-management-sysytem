//local storage stored here
localStorage.clear()
const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 for Employee 1",
                "description": "Complete the quarterly report",
                "taskDate": "2025-03-20",
                "category": "Reporting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2 for Employee 1",
                "description": "Attend the team meeting",
                "taskDate": "2025-03-18",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Saanvi",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 for Employee 2",
                "description": "Prepare the presentation slides",
                "taskDate": "2025-03-19",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 2 for Employee 2",
                "description": "Complete the data analysis",
                "taskDate": "2025-03-17",
                "category": "Data Analysis"
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 for Employee 3",
                "description": "Update the company website",
                "taskDate": "2025-03-20",
                "category": "Web Development"
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Diya",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 for Employee 4",
                "description": "Fix the server issue",
                "taskDate": "2025-03-19",
                "category": "Technical Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 2 for Employee 4",
                "description": "Troubleshoot network problems",
                "taskDate": "2025-03-18",
                "category": "Technical Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 3 for Employee 4",
                "description": "Deploy software updates",
                "taskDate": "2025-03-17",
                "category": "Software Deployment"
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Riya",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 for Employee 5",
                "description": "Create a budget plan",
                "taskDate": "2025-03-20",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 2 for Employee 5",
                "description": "Review the financial statements",
                "taskDate": "2025-03-18",
                "category": "Finance"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "firstname": "Arjun",
        "email": "admin@example.com",
        "password": "123"
    }
];
 

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  
}
export const getLocalStorage = ()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
}
