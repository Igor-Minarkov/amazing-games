- [Project installation](#project-installation)
- [Project Architecture](#project-architecture)
  * [Components](#components)
    + [Dashboard](#dashboard)
      - [DashboardDetails](#dashboarddetails)
        * [InlineEdit](#inlineedit)
        * [Modal](#modal)
    + [MainView](#mainview)
      - [Header](#header)
      - [MainViewDetails](#mainviewdetails)
    + [Schedule](#schedule)
      - [PresetersView](#presetersview)
      - [TimeSlotsInfo](#timeslotsinfo)
  * [Context Api](#context-api)
  * [Data](#data)
    + [Mock Data](#mock-data)
  * [Unit tests](#unit-tests)
- [Dependencies](#dependencies)
  * [React router v6 implementation.](#react-router-v6-implementation)
 - [Design & Responsiveness](#dependencies)

# Project installation

1. To install all dependencies run the command `npm install`.
2. To run the project locally, run the command `npm start`.
3. To run the unit tests, run the command `npm test`.

# Project Architecture

The main blocks of this project are **_Components_**, **_Context_**, and **_Data_**. Inside the components, we have nested (children) components. We are using Context API as a state management hook, and we have two simple JSON files inside the data folder.

## **_Components_**


### **_Dashboard_**

The main idea behind the implementation of Dashboard was to have one component for the routes "/presenters" and "/tables". Inside this component, we are displaying the input that is responsible for adding the value of presenters or tables, respectively. With the help of the Context API hook, we can switch between views and reuse the same component. There is room for debate here regarding the upsides and downsides of this implementation as well. 

#### **_DashboardDetails_**

DashboardDetails is the component that is a child component of Dashboard. Here we can see the list of presenters and tables, respectively. All the crud operations are done in this view. We can add, delete and edit the current data. I wanted kind of more modern implementation of the edit component so I created the component called 'InlineEdit'.

##### **_InlineEdit_**

This is a custom component that can be reused all over the project. This is not a very crucial aspect when we work on such a small task, but it can be very helpful in larger projects from the perspective of saving time and resources. The data is saved on onBlur() event.

##### **_Modal_**

We didn't need particular validation when editing data, because the user can easily change whatever he wants to change with very little effort and without consequences. This does not apply to this component. I have created a custom modal component. When the user clicks on the delete button, modal is showing in the middle of the screen. I decided to put the close button in the upper right corner because I wanted to be sure that the user only leaves the page if he strongly wants to close the modal and not delete the data.

### **_MainView_**

The MainView is the 'homepage' of our task. We can navigate to "/schedule/:id", or we can navigate to "/presenters" and "/tables".
This is the least populated component.

#### **_Header_**

The header is the child component of the MainView component. The main aim of the header is to allow us to switch between presenters and tables.

#### **_MainViewDetails_**

The same goes for this component. This component allows us to navigate to the Schedule component, which we will discuss next.

### **_Schedule_**

The schedule is one component that needs to generate for all three shifts. This component is the brain of the project and holds the logic for the implementation, but in the larger project, I would take another approach. This component handles the functions for counting the minutes and employee roasting. It has two children components:

#### **_PresetersView_**

This component is showing the presenters who are dynamically added, edited, or deleted. The state is managed by Context API.

#### **TimeSlotsInfo**

TimeSlotsInfo contains the info regarding timeSlots and tables rotation.

## **_Context Api_**

The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. It is a react hook that is responsible for the type of state management. It is recommended when we do not work with lots of components, that need more business logic and more complex implementation.

Most of the crud functions that are used inside the data view are created here. 

`  const addData = (title, customData, setter) => {
    setSetter(setter)
    customSetter((customData) => [
      ...customData,
      { name: title, id: uuid(), currTable: null }
    ]);
  };`

  `  const deleteData = (id, customData, setter) => {
    setSetter(setter)
    customSetter(customData.filter((customData) => customData.id !== id));
  }; `

`   const edit = (title, id, customData, setter) => {
    setSetter(setter);
    const mappedArr = customData.map((task) =>
      task.id === id ? { name: title, id: id, currTable: null } : task
    );
    customSetter(mappedArr);
  }; `

## **_Data_**

Inside data, we got simple JSON files for presenters and tables.

Presenters data example:
`
{
  data: [
    {
      name: "P1",
      id: 0,
      currTable: null,
    },
    {
      name: "P2",
      id: 1,
      currTable: null,
    },
    {
      name: "P3",
      id: 2,
      currTable: null,
    },
    {
      name: "P4",
      id: 3,
      currTable: null,
    },
    {
      name: "P5",
      id: 4,
      currTable: null,
    },
    {
      name: "P6",
      id: 5,
      currTable: null,
    },
    {
      name: "P7",
      id: 6,
      currTable: null,
    },
    {
      name: "P8",
      id: 7,
      currTable: null,
    },
    {
      name: "P9",
      id: 8,
      currTable: null,
    },
    {
      name: "P10",
      id: 9,
      currTable: null,
    },
    {
      name: "P11",
      id: 10,
      currTable: null,
    },
    {
      name: "P12",
      id: 11,
      currTable: null,
    },
  ],
}; `

### **_Mock Data_**

I am using this folder to store mock data. AppMock.js is the file that I am using to test the react-router.


## **_Unit tests_**

Basic unit tests on components and unit tests with mock data on the 'AppMock' for the router.

# Dependencies.

I aimed to not use dependencies. I was more focused on creating custom components and CSS as well. Dependencies that we use inside this project:
1. react-uuid - For generating ids (for development and testing)
2. testing-library/react (for testing)
3. jest-ax (for testing)
4. React router 6

## React router v6 implementation.

News in React router v6:

Relative routing and linking
Automatic route ranking
Nested routes and layouts.

# Design & Responsiveness

The design is flexible, minimalistic and very simple. The project is responsive on tablets and mobile as well. That was not my aim, my aim was to have good, flexible elements without writing any media queries.










