CREATE TABLE catapult(
    catapult_id SERIAL PRIMARY KEY,
    tier VARCHAR(50),
    catapult_name VARCHAR(255),
    catapult_gateway VARCHAR(255)
)

INSERT INTO catapult(tier, catapult_name, catapult_gateway) VALUES('common','Wood Catapult','https://gateway.pinata.cloud/ipfs/QmSgD2YjsyLkVqaY5z3j8vZmCYLDC35HvCpXTeojnVQ7uv?_gl=1*1sww0ck*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');
INSERT INTO catapult(tier, catapult_name, catapult_gateway) VALUES('rare','Sacred Wood Catapult','https://gateway.pinata.cloud/ipfs/QmSxVetAShMnX7DMb22JYgapBSrLMXRL4bgn4yz52tuDva?_gl=1*1sww0ck*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');
INSERT INTO catapult(tier, catapult_name, catapult_gateway) VALUES('super_rare','Legendary Wood Catapult','https://gateway.pinata.cloud/ipfs/QmRkBFLxu2bDVqBQz3ngmUepYK929NbdizSnKS2qsU6Aw5?_gl=1*1sww0ck*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTk5MDg3Mi4zNC4wLjE2Nzk5OTA4NzIuNjAuMC4w');