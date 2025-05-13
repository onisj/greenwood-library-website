# Greenwood Library Website – Capstone Git Collaboration Project

## 📘 Project Overview

This capstone project simulates a collaborative software development scenario involving two contributors—**Morgan** and **Jamie**—working on enhancing the official website of the **Greenwood Community Library**. The goal is to practice professional Git workflows including branching, commits, pull requests, and merge operations.


## 🧑‍💻 Contributors & Responsibilities

| Contributor | Branch Name         | Contribution                          |
|-------------|---------------------|----------------------------------------|
| Morgan      | `add-book-reviews`  | Added a new `book_reviews.html` page   |
| Jamie       | `update-events`     | Updated the `events.html` page         |


## ✅ Step-by-Step Implementation Guide

### 🔧 1. Project Setup

#### ✅ Create GitHub Repository
- Name: `greenwood-library-website`
- Initialize with a `README.md`

#### ✅ Clone the Repository

```bash
git clone https://github.com/<your-username>/greenwood-library-website.git
cd greenwood-library-website
code .
```


### 📝 2. Create Main Website Files (Simulate Existing Site)

#### ✅ Create Base HTML Files

```bash
touch home.html about_us.html events.html contact_us.html
```

Add sample HTML content into each file:

**home.html**

```html
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body><h1>Welcome to Greenwood Community Library</h1></body>
</html>
```

Repeat similar structure for:

* `about_us.html`
* `events.html`
* `contact_us.html`

#### ✅ Stage, Commit, and Push

```bash
git add .
git commit -m "Add base website files"
git push origin main
```

📸 *Screenshot:* `git status` and `git push` confirmation
![Git Status & Git Push Confirmation](./assets/01_git _tatus_&_git_push_confirmation.png)


## 👩‍💻 Morgan’s Work – Book Reviews Section

### 3. Create and Switch to Branch

```bash
git checkout -b add-book-reviews
```
📸 *Screenshot:* Branch creation and switch
![Branch creation and switch](./assets/02_branch_creation_commit_push.png)



### 4. Create Book Reviews File

```bash
touch book_reviews.html
```

**book\_reviews.html**

```html
<!DOCTYPE html>
<html>
<head><title>Book Reviews</title></head>
<body>
  <h2>Community Book Reviews</h2>
  <p>Here's what our readers are saying!</p>
</body>
</html>
```

📸 *Screenshot:* Branch creation and switch
![Branch creation and switch](./assets/03_branch_creation_pull_from main_push.png)


### 5. Stage, Commit, and Push

```bash
git add book_reviews.html
git commit -m "Add book reviews section"
git push origin add-book-reviews
```

📸 *Screenshot:* Branch creation, commit, and push
![Branch creation and switch](./assets/03_branch_creation_pull_from main_push.png)


### 6. Create Pull Request

* Go to: [GitHub Repo](https://github.com/<your-username>/greenwood-library-website)
* Click **"Compare & pull request"** on `add-book-reviews`
* Title: `Add Book Reviews Section`
* Click **"Merge Pull Request"**

📸 *Screenshot:* PR opened and merged
![Pull requests and merges](./assets/add-book-reviews_pull_request.png)
![Pull requests and merges](./assets/pull&merge1.png)
![Pull requests and merges](./assets/pull&merge2.png)
![Pull requests and merges](./assets/pull&merge3.png)
![Pull requests and merges](./assets/pull&merge4.png)



## 👨‍💻 Jamie’s Work – Events Page Update

### 7. Create and Switch to New Branch

```bash
git checkout main
git pull origin main
git checkout -b update-events
```

📸 *Screenshot:* Branch creation and switch
![Branch creation and switch](./assets/03_branch_creation_pull_from main_push.png)

### 8. Edit `events.html`

Replace or append content with upcoming events:

```html
<h2>Upcoming Events</h2>
<ul>
  <li>Author Meet & Greet – May 20</li>
  <li>Children’s Story Hour – May 25</li>
</ul>
```


### 9. Stage, Commit, Pull & Push

```bash
git add events.html
git commit -m "Update events page with upcoming events"
git pull origin main
# Resolve any conflicts if prompted
git push origin update-events
```

📸 *Screenshot:* Pull from main, commit, and push confirmation
![Branch creation and switch](./assets/03_branch_creation_pull_from main_push.png)


### 10. Create Pull Request for Jamie

* Go to: [GitHub Repo](https://github.com/<your-username>/greenwood-library-website)
* Create PR for `update-events`
* Title: `Update Events Page`
* Merge into `main`

📸 *Screenshot:* Open PR and merge confirmation

![Pull requests and merges](./assets/add-book-reviews_pull_request.png)
![Pull requests and merges](./assets/Open_PR&merged_confirmation1.png)
![Pull requests and merges](./assets/Open_PR&merged_confirmation2.png)
![Pull requests and merges](./assets/Open_PR&merged_confirmation3.png)
![Pull requests and merges](./assets/Open_PR&merged_confirmation4.png)



## ✅ Final Project Confirmation

After all merges, I ensured my local main branch reflects the updates:

```bash
git checkout main
git pull origin main
```

Confirm all final files exist:

* `home.html`
* `about_us.html`
* `events.html`
* `contact_us.html`
* `book_reviews.html`

📸 *Screenshot:* File list and `git log --oneline` showing all commits

![alt text](assets/04_file_list&git_log--oneline.png)


## 🔗 Live Repository

[https://github.com/onisj/greenwood-library-website](https://github.com/onisj/greenwood-library-website)

