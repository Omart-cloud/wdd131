/* Get references to the input, button, and list elements */
const input = document.querySelector('input');
const addButton = document.querySelector('button');
const list = document.querySelector('ul');

/* Add event listener to the Add Chapter button */
addButton.addEventListener('click', () => {
    /* Check if the input is not blank */
    if (input.value.trim() !== '') {
        /* Create a new li element */
        const li = document.createElement('li');

        /* Set the li element's textContent to the input value */
        li.textContent = input.value;

        /* Create a delete button */
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        /* Append the delete button to the li element */
        li.appendChild(deleteButton);

        /* Append the li element to the unordered list */
        list.appendChild(li);

        /* Add an event listener to the delete button */
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        /* Clear the input value */
        input.value = '';
    } else {
        /* If input is blank, return focus to the input field */
        input.focus();
    }

    /* Ensure focus is returned to the input field */
    input.focus();
});
