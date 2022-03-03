# Updating Profectus

## Github

Due to Profectus being a template repository, your projects do not share a git history with Profectus. In order to update changes, you will need to run the following:

```bash
git remote add template https://github.com/profectus-engine/Profectus
git fetch --all
git merge template/main --allow-unrelated-histories
```

The first command only has to be performed once. The third command may require you to merge conflicts between code both you and Profectus have changed - however, due to the modularity of Profectus, this should be fairly rare. Unfortunately, due to the unrelated histories the first time you do this _every_ change will be marked as a conflict, and you'll need to accept each one.

## Replit

The sidebar has a tab labelled "Version Control", which you can use to merge all changes made to Profectus into your project. Unfortunately, replit does not have a merge tool so this process may irrecoverably erase changes you've made - I'd recommend making a backup first.

## Glitch

Unfortunately glitch does not provide any method by which to update a project from a github repository. If you've only changed things in the data folder you may consider creating a new project, importing the current version of Profectus, and then placing your data folder in the new project.
