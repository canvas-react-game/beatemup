CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(512) NOT NULL,
  body VARCHAR NOT NULL,
  user_id INT,
  created_at Date NOT NULL,
  comments_count INT,
);