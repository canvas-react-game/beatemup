CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(512) NOT NULL,
  body VARCHAR NOT NULL,
  user_id INT,
  created_at Date NOT NULL,
  comments_count INT,
);

CREATE TABLE reaction_type (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255) NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  message VARCHAR NOT NULL,
  parent_id INT,
  user_id INT,
  topic_id INT NOT NULL,
  FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE CASCADE
);

CREATE TABLE reactions (
  id SERIAL PRIMARY KEY,
  comment_id INT NOT NULL,
  user_id INT,
  reaction_type_id INT NOT NULL,
  FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE,
  FOREIGN KEY (reaction_type_id) REFERENCES reaction_type (id) ON DELETE RESTRICT
);