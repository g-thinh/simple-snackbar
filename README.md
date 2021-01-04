# The Simple Snackbar

Available here: https://simple-snackbar.vercel.app/

This is my attempt at creating a snackbar component inspired by Material UI's snackbar which also follows Google's Material Design principles [here](https://material.io/components/snackbars).

## Features include:

- Uses React-Redux for managaging the snackbar's toggle state and the display message.
- 6 anchor positions. (Disabled left/right positions after a certain number of characters in the display message)
- Various colours for different types of snackbars!
- Text wraps and enlargens the snackbar for overflow.
- Mobile and Web ready.
- Automatically closes itself after timeout or on close button.
- No consecutive snackbars.
- No character limit for message. (Suggested max 2 lines).

## Usage:

- Single component to be imported with 3 properties: `timeout` duration, `anchor` position and theme `type`.
- Can be placed in any view/page. (Adjust z-index as needed)
- Simply requires a redux action dispatch binded to any event to enable.

## Stuff i'd want to add:

- Custom dismiss button within snackbar with a handler function to dismiss or undo actions.
- Handle placement where there is a Floating Action Button for mobile.
- Different placement of dimissal button for two-line messages.
