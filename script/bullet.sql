CREATE TABLE bullet(
    bullet_id SERIAL PRIMARY KEY,
    tier VARCHAR(50),
    bullet_name VARCHAR(255),
    bullet_gateway VARCHAR(255)
)

INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('common','Bird','https://gateway.pinata.cloud/ipfs/QmUic1rtSgQkrAwbAJFD4MZTzhHedZScSb7oW7zMMSrjGf?_gl=1*63nwgk*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('super_rare','Meteor','https://gateway.pinata.cloud/ipfs/Qma2KUCZsx1MdbRWNmmYcBFfG1DLkyWYz7s4x3XLTspTpr?_gl=1*63nwgk*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('common','Stone','https://gateway.pinata.cloud/ipfs/QmaKneNWR8NXEgaDkd7gmbHzL8tEBod1XfVwdaHG3yWjzD?_gl=1*63nwgk*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('rare','Hailstone','https://gateway.pinata.cloud/ipfs/QmXuZUh8GYKPcLhNzUVbiXANcXjRf81zaXpAVwEKd2z2x4?_gl=1*2o9fhx*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTkzNzM2Ny4zMy4wLjE2Nzk5MzczNzMuNTQuMC4w');