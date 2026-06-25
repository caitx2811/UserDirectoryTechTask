# UserDirectoryTechTask
User Directory React application created for the SOCOTEC take home technical exercise.

To install dependencies and run the application locally:
Assuming Node.js and NPM are already installed
Pull the repo and open it with Visual Studio Code.
In the terminal type:
`npm install`
`npm run dev`

Assumptions made
- User data is not needed to be added, edited or deleted.
- User count text does not need to be displayed if 0 or all users are displayed.
- The current user roles are the only roles that a user can have.

Limitations and future improvements
- useStates are currently defined at app level. These would be collated into a React context.
- A user can currently only have 3 different roles, which are hardcoded values. I would update the filtering logic to receive all roles users have from an array, generated from the user data. All roles users have will be displayed this way.
- Logic for both filters is seperate. I would move this into its own function which builds the select element for the filter based on the specific data it is needed (including the aforementioned array of options).
- Accessibility features, I would add ARIA attributes to elements for screenreader usage, and implement a dark mode for the application with a checkbox to change to this mode.
- Instead of having the user data locally I would use API calls to retrieve it from a database.
- Ideally I would add functionality for users to be added to and deleted from the directory, and to be able to edit their data.

AI assistance

For moving the filtering logic into a helper function, I gave ChatGPT the following prompt:
"Move the following code into a React helper function. Create this as if it is going into a seperate file, and how to run it in the existing component."

The code changes are in a commit, however there was a couple of instances where instead of returning the selected user, the AI generated function returned true. I changed these back as an object needs to be returned rather than a boolean. The response also did not include where the function for filtering users would be run in the code, so I have added creating the list within the Table HTML rather than seperately.