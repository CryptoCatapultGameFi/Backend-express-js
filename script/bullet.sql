CREATE TABLE bullet(
    bullet_id SERIAL PRIMARY KEY,
    tier VARCHAR(50),
    bullet_name VARCHAR(255),
    bullet_gateway VARCHAR(255)
)

INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('common','Bird','https://gateway.pinata.cloud/ipfs/QmQQxAESPLyzxeWHXamWHxUhLCCh2uvtxZ9iVDrDmiJBdo?_gl=1*1qeikka*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTI0MDc5MS4xOS4xLjE2NzkyNDE0OTUuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('super_rare','Meteor','https://gateway.pinata.cloud/ipfs/Qmctq5aLXvMqM12yBxuxN68cQhCuwzXxXQjdNE6Kpout3C?_gl=1*1i96s8r*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTI0MDc5MS4xOS4xLjE2NzkyNDE0OTUuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('common','Stone','https://gateway.pinata.cloud/ipfs/QmcdTQ2qdkcFSi6vT7tRtZsrq14MEuFHcjuFs7EkASh1s1?_gl=1*19hjdnf*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTI0MDc5MS4xOS4xLjE2NzkyNDE0OTUuNjAuMC4w');
INSERT INTO bullet(tier, bullet_name, bullet_gateway) VALUES('rare','Ice','https://gateway.pinata.cloud/ipfs/QmVLZLHomVuehQxfMiaj6tYTMsQWstNdcbfp76nCsMa6SW?_gl=1*qmu8sr*_ga*ZDIwYmRiNjEtNTZlZi00OTVmLTkwNzgtMWViY2E2OWRjOTJm*_ga_5RMPXG14TE*MTY3OTI0MDc5MS4xOS4xLjE2NzkyNDE0OTUuNjAuMC4w');