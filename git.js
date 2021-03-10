/*
What is Git?
    -Git is a version control system, in which developers can use to push applications to a Github repository. 
    -Github repositories are used for various reasons:
        -Storing applications in case local files are lost.
        -Cloning other's repositories to access the code locally
        -A shared space for a group of developers to work together in creating an application
​
Git Walkthrough
​
    Open up the terminal associated with your OS
​
    dir to see what directory you're currently in
​
    cd into 1-jsFundamentals (you will need to know the path to that folder)
​
    Sign up or sign in to github
​
    Create new repository called lectureNotes
​
    Open your terminal back up, once open run through these commands:
    
        git init            -> Initializes the git repository in the current directory, we only need to use this command once for each separate repository created.
​
        git status      -> Checks the status of our files for any untracked files or changes
​
        git add .         -> Adds ALL(.) files in the current directory to be tracked by git
​
        git commit -m "message"     -> Packages any tracked changes, with a short message explaining the changes, to be pushed to the Github repository 
​
        git remote add origin "paste repo link here"         -> Connects our local git repository to the online Github repository
​
        git push origin main         -> Pushes our committed files to the online Github repository
​
​
Note: A good way to think of this process is by relating it to an amazon warehouse process:
    git init creates the warehouse
​
    git add . is where the order is picked
​
    git commit -m "message" is where the order is packaged up and ready to be shipped
​
    git push origin main is what ships the order
​
    git status is not required in the process, but rather just a helpful command to check the current status of our files within the local git repository
​
​
In order to update the github repository with any changes made on your local machine, use these steps:
1. Within the terminal, navigate to the folder containing the project you created the git repository in (git init)
2. git add .
3. git commit -m "message here explaining changes"
4. git push origin main
*/