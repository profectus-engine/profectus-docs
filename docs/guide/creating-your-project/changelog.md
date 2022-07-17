# Changelog

This is a Vue component stored at `/src/data/Changelog.vue` used to display all the changes version to version. You can use any features you'd like within here, but it's recommended to simply add new `<details>` elements for each new major release, and mark the most recent one as `open` by default. It is strongly advised to not change any of the code relating to making the changelog appear in a modal.

There is a single version included by default that can serve as a reference of how it is recommended to add a version to the changelog:

```html
<details open>
	<summary>v0.0 Initial Commit - <time>2021-09-04</time></summary>
	This is the first release :D
	<ul>
		<li class="feature">Did everything</li>
		<li class="fix">Had some fun</li>
		<li class="breaking">Removed everything</li>
		<li class="balancing">Created some bugs to fix later</li>
	</ul>
</details>
```

The `details` and `summary` tags will create a section that can be collapsed and uncollapsed. While collapsed only the text in the `summary` tag will appear. By default sections are collapsed, although adding the `open` attribute to the `details` element will change that. 

Within the details of the version, you can add a description and a list of changes for that version. CSS classes have been defined to automatically mark a change as a feature, fix, breaking change, or balancing tweak. You can of course add additional tags as you have full control over the entire component.
