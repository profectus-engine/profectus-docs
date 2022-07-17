# Project Info

This is a JSON file containing information that describes your project and configures parts of how Profectus should represent it.

It is stored at `/src/data/projInfo.json`.

## Basic Config

### title

- Type: `string`
- Default: `Profectus`

The name of the project, which will appear in the info tab and in the header, if enabled. The page title will also be set to this value.

### id

- Type: `string`
- Default: `""`

This is a unique ID used when saving player data. Changing this will effectively erase all save data for all players.

::: warning
This ID MUST be unique to your project, and should not be left as the default value. Otherwise your project may use the save data from another project and cause issues for both projects.
:::

### author

- Type: `string`
- Default: `""`

The author of the project, which will appear in the info tab.

### discordName

- Type: `string`
- Default: `The Paper Pilot Community`

The text to display for the discord server to point user's to. This will appear when hovering over the discord icon, inside the info tab, the game over screen, as well as the NaN detected screen.

By default, this is The Paper Pilot Community, which can act as a catch-all for any Profectus projects without their own servers. If you change the discord server with your own, The Paper Pilot Community will still display underneath the custom server when hovering over the discord icon and within the info tab. Those places will also contain a link to the Modding Tree discord server.

### discordLink

- Type: `string`
- Default: `https://discord.gg/WzejVAx`

The link for the discord server to point user's to. See [discordName](#discordname) for more details.

## Version Config

### versionNumber

- Type: `string`
- Default: `0.0`

The current version of the project loaded. If the player data was last saved in a different version of the project, [fixOldSave](./project-entry.md#fixoldsave) will be run, so you can perform any save migrations necessary. This will also appear in the nav, the info tab, and the game over screen.

### versionTitle

- Type: `string`
- Default: `Initial Commit`

The display name for the current version of the project loaded. This will also appear in the nav, the info tab, and the game over screen, unless set to an empty string.

## Display Config

### allowGoBack

- Type: `boolean`
- Default: `true`

Whether or not to allow tabs (besides the first) to display a "back" button to close them (and any other tabs to the right of them).

### defaultShowSmall

- Type: `boolean`
- Default: `false`

Whether or not to allow resources to display small values (<.001). If false they'll just display as 0. Individual resources can also be configured to override this value.

### defaultDecimalsShown

- Type: `number`
- Default: `2`

Default precision to display numbers at when passed into `format`. Individual `format` calls can override this value, and resources can be configured with a custom precision as well.

### useHeader

- Type: `boolean`
- Default: `true`

Whether or not to display the nav as a header at the top of the screen. If disabled, the nav will appear on the left side of the screen laid over the first tab. 

### banner

- Type: `string | null`
- Default: `null`

A path to an image file to display as the logo of the app. If null, the title will be shown instead. This will appear in the nav when `useHeader` is true.

### logo

- Type: `string`
- Default: `""`

A path to an image file to display as the logo of the app within the info tab. If left blank no logo will be shown.

### initialTabs

- Type: `string[]`
- Default: `["main"]`

The list of initial tabs to display on new saves. This value must have at least one element. Each element should be the ID of the layer to display in that tab. 

## Advanced Config

### maxTickLength

- Type: `number`
- Default: `3600`

The longest duration a single tick can be, in seconds. When calculating things like offline time, a single tick will be forced to be this amount or lower. This will make calculating offline time spread out across many ticks as necessary. The default value is 1 hour.

### offlineLimit

- Type: `number`
- Default: `1`

The max amount of time that can be stored as offline time, in hours. 

### enablePausing

- Type: `boolean`
- Default: `true`

Whether or not to allow the player to pause the game. Turning this off disables the toggle from the options menu as well as the NaN screen. Developers can still manually pause by just running `player.devSpeed = 0` in console (or `= 1` to resume).
