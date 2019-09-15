# Developer Comments

- Intention of the task

This task is a Tech task for ClearScore interview process.

- What application does and any improvements that can be made to solution

This tech task renders an IdeaBoard whereby a user can add ideas and view the saved list. By default, on page load, the idea list is empty. User can add, edit, or delete ideas. Application can be improved by either saving ideas to local storage or external service so that page load user can view previously saved list.

Ideas are by default sorted in descending order; i.e. latest idea first. However user can change preference to sort it by oldest first. As an improvement alphabetical sort can be added. Also sort preference can be stored in local storage or external service so as to persist user preferences.

- Implementation

I have used react hooks to solve the problem and the test have been done using react-testing-library.
The task could have also been done without hooks. In which case I would have preferred using Jest/Enzyme test frameworks.
However react hooks are preferred choice because functional components are more performant and remove extra boilerplate code added by class components.

- Overall view

It was an interesting test and I enjoyed it.
