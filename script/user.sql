CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_address VARCHAR(255),
  user_nft_using_id VARCHAR(255),
  user_playing boolean);
