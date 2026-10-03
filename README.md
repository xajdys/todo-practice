# Todo Git Learning Project

A simple todo app built as a hands-on project to learn Git and GitHub workflows like a real developer.

This project was created to practice:
- Git basics
- branching
- commits
- pull requests
- merges
- merge conflicts
- rebases
- stash
- cherry-pick
- professional Git workflows

---

## Project Overview

This repo contains a small frontend todo app with:
- add todo
- mark todo as complete
- delete todo
- edit todo
- clear completed items
- localStorage persistence
- basic validation

The main goal was not just to build the app, but to learn how developers use Git in a team workflow.

---

## What I Learned

### 1. Git Basics
- how git tracks changes
- what a commit is
- how a branch works
- how merge works
- how push and pull work
- how GitHub stores the remote repo

### 2. Real Developer Workflow
- never work directly on main
- use feature branches
- commit small, meaningful changes
- push to GitHub
- create pull requests
- review before merging
- merge into main
- update local main after merge

### 3. Merge Conflicts
- merge conflicts happen when two branches edit the same file
- Git pauses and marks the conflict
- conflicts must be resolved manually
- both versions are compared and then combined intentionally

### 4. Branch Strategy
- each feature gets its own branch
- branches isolate work
- branches help group related changes
- work can be reviewed safely before merging

### 5. Professional Git Practices
- good commit messages
- clear branch naming
- pull before push
- keep main stable
- delete merged branches
- keep PRs focused
- use rebase carefully
- squash when appropriate
- use force push only on personal branches

---

## App Features

- Add new todo
- Validate empty todo input
- Mark todo as completed
- Edit existing todo
- Delete a todo
- Clear completed todos
- Persist todos using localStorage
- Responsive simple styling

---

## Repository Workflow Used

The repo followed a realistic development workflow:

1. Create GitHub repo
2. Clone locally
3. Create feature branch
4. Make code changes
5. Commit changes
6. Push feature branch
7. Open Pull Request
8. Review code
9. Merge into main
10. Pull latest main
11. Delete branch if needed

Example workflow:

```bash
git switch main
git pull origin main
git switch -c feature/add-login-form

# make changes
git add .
git commit -m "Add login form"

git push -u origin feature/add-login-form
