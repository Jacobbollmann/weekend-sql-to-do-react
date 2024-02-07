CREATE TABLE "todo" (
  "id" SERIAL PRIMARY KEY, 
  "task" VARCHAR (100) NOT NULL,
  "description" VARCHAR (250),
  "completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("task", "description", "completed")
VALUES 
('Clean house', 'Living room needs most attention', FALSE),
('Go to post office', 'Dont forget to get stamps while there', FALSE),
('Homework due', 'Just one assignment this week', FALSE);