CREATE TABLE user_nft_used(
    user_nft_used_id SERIAL PRIMARY KEY,
    user_address VARCHAR(255),
    catapult_address VARCHAR(255),
    catapult_power VARCHAR(50),
    bullet_power VARCHAR(50),
    catapult_name VARCHAR(255),
    bullet_name VARCHAR(255),
    catapult_img VARCHAR(255),
    bullet_img VARCHAR(255),
    time_stamp date
);