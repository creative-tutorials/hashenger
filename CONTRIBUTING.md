# Contributing to Hashenger

We love your commitment towards making a change to this Open-Source Community. But as you know there are some guidelines you must follow to keep this community safe and secure.

- [Code Of Conduct](CODE_OF_CONDUCT.md)
- [Issues]()
- [Requirements]()
- [Tools we use]()
- [Privacy]()
- [Deployment]()
- [Setup]()
- [Pull Requests]()
- [Remarks]()

## Issues

- Before contributing to this repo, ensure that your change(s) should meetup or follow the issues listed on this repo.
- **DO NOT** Create duplicate issues. Check and confirm that the issue you want to add does not already exist on this platofrm.
- Ensure your Pull Request is linked to the issue you want to contribute to/on.

## Requirements

I know you'd love to contribute to open source project, but please don't do so if you don't have an understanding of the tech stacks they use.
Here is a list of requirements we recommend before contributing to this project.

* Node.js is installed on your PC
* You're familiar with both Frontend and Backend.
* Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

## Tools we use
As I mentioned earlier, that you should be familiar with both frontend and backend technologies. Here are some of the technologies we are using.

* React
* Node.js
* Express
* Firebase
* MongoDB

## Privacy
When pushing changes or before pushing changes please make sure you're not exposing your API_KEY or some private information you wouldn't want to expose to others. Here are some of the privacy guidelines I recommend.

* Store `api_keys` in an `env` `(environment variable)` file
* Keep account details safe - Don't use real email address and password to login to the app for now.
* If you noticed a leak in personal information, kindly report the issue here.
* Use a MongoDB local database for testing on the backend.

## Deployment
If you push changes and noticed deployment failed, please report the issue. You can also view log files to trace what happened, and see if it's something you can fix, I'll asign it to you ASAP.

## Setup
Follow these instructions to setup the project and start making changes:

1. Fork this repo by clicking the fork button in the top-right corner.
1. Assuming your GitHub Username is jane, run the following in your terminal:
   
```bash
cd ~/Desktop
git clone git@github.com:jane/hashenger.git
```
3. Create a remote branch to keep your local clone as well as your fork in sync with the remote branch. 

```ssh
git remote add hashenger git@github.com:creative-tutorials/hashenger.git
```
You can give any name to your remote. For convenience, we are using hashenger here.

4. Run `git branch` to confirm that you are on the `master` branch before proceeding. Then, pull the latest changes from the remote branch and create a new branch to begin making your own changes.

```ssh
git checkout master
git pull hashenger master
git checkout -b name-of-your-branch
```

> **Note:** Give a descriptive name to your feature branch (For example, feat-featureName, bugFix-bugName etc.). This will help us to track it in the future if the need arises.

5. Run the following to start a preview of your changes:

```
# switch to a new terminal
npm install   /downloads and installs the dependencies of this project./
npm run dev
```

Your local preview will now be available at ```http://localhost:5173/```

6. Make your desired changes to any of using your preferred editor. If your changes are huge, break them into meanignful chunks and make a separate PR for each chunk so that they can be reviewed in the appropriate context.

7. After completing your changes, **stage** and **commit** them to your branch, and then push the branch to your fork.

> **Note:** Do not commit the package files (package.json and/or package-lock.json)

8. Perform a merge to sync your current branch with the upstream branch.

```
git fetch upstream
git merge upstream/master
```

## Pull Request
* Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review.

* Link the issue you have resolved in the PR Template (e.g Closes/Fixes #392).

* Your commit messages should conform to the [Conventional commit messages guidelines.](https://www.conventionalcommits.org/en/v1.0.0/)

* You are responsible for resolving any conflicts that may arise in the process of creating a PR (merge conflicts, workflow issues etc.)

* If fixing a bug:

* The name of your PR should be a summary of the changes you are making. (For example fix: fix non-responsive navbar, feat: add prettier for code formatting) Provide a detailed description of the bug in the PR. Screenshots are nice.