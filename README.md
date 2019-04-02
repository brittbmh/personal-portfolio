# React Redux with Sagas

A one-page website portfolio to showcase my projects. This project was created as a weekend assignment during my time at Prime Digital Academy. This is different from my portfolio website.

## Setup

1. Create a database named `portfolio`
1. Run the following SQL using the `portfolio` database:

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```

1. `npm install`
1. `npm run server`
1. `npm run client`

## Notes

### Tags

Each project is currently limited to one tag - the primary technology used.


## Feature List

### Project Page

Projects each have a brief description, a snapshot and link to their GitHub repository, and a website if applicable.

### Admin Page

The admin page has a form to upload new projects and a table that lists all the projects with the option to delete projects.


## Future Goals

- [ ] Use the GitHub API to get user information to display at the top of the page
- [ ] Ability to upload images with a new project
- [ ] Continue to improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding additional tags
- [ ] Implement additional features of the GitHub API
- [ ] User login to access admin page
- [ ] Deploy through Heroku
