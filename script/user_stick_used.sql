CREATE TABLE user_stick_used(
    user_stick_used_id SERIAL PRIMARY KEY,
    user_address VARCHAR(255),
    stick_address VARCHAR(255),
    time_stamp date
);