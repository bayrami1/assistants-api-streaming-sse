CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    thread_id INT REFERENCES threads(id),
    sender VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
