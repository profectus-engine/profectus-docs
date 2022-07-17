# Themes

Themes are objects that change how the project's interface should look. This is done mostly by changing the values of various CSS variables. You can look at the existing themes as a reference for the kind of values these CSS variables expect. They can also set various theme options that change how parts of the screen are laid out, which are described [below](#theme-options).

They are stored in `/src/data/themes.ts`.

## Modifying Themes

You can add a theme by adding a property to the `Themes` enum and then including the theme in the exported object. It's recommended to use the spread operator if you'd like to have a theme look like another, but override specific options / CSS variables.

Themes added in this way will be automatically included in the Themes dropdown in the Options tab. Removing themes from the enum and exported object will similarly hide them from the dropdown.

If you'd like to change which theme is the default, you may modify the initial player settings object in the `/src/game/settings.ts` file. Keep in mind you'll also want to change it in the `hardResetSettings` function in the same file.

## Theme Options

### floatingTabs

- Type: `boolean`

Toggles whether to display tab buttons in a tab list, similar to how a browser displays tabs; or to display them as floating buttons, similar to how TMT displays buttons.

### mergeAdjacent

- Type: `boolean`

If true, elements in a row or column will have their margins removed and border radiuses set to 0 between elements. This will cause the elements to appear as segments in a single object. 

Currently, this can only merge in a single dimension. Rows of columns or columns of rows will not merge into a single rectangular object.
