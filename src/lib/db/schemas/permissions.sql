CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    role_id INT REFERENCES roles(id),
    description TEXT NOT NULL
);
