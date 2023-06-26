create table if not exists "users"(
"id" SERIAL primary key,
"name" VARCHAR(50) not null,
"email" VARCHAR(50) not null unique,
"password" VARCHAR(120) not null,
"admin" BOOLEAN NOT NULL DEFAULT  FALSE 
);

create table if not exists "courses"(
"id" SERIAL primary key,
"name" VARCHAR(50) not null,
"description" TEXT not null
);

create table if not exists "usersCourses"(
"id" SERIAL primary key,
"active" BOOLEAN NOT NULL DEFAULT TRUE,
"userId" INTEGER NOT NULL,
FOREIGN KEY("userId")
    REFERENCES "users"(id),
"courseId" INTEGER NOT NULL,
FOREIGN KEY("courseId")
    REFERENCES "courses"(id),
);