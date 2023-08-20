function waitForReplicaSet() {
  const replStatus = rs.status();
  if (replStatus && replStatus.ok === 1) {
    return;
  }
  print('Waiting for replica set initialization...');
  sleep(1000);
  waitForReplicaSet();
}

waitForReplicaSet();

rs.initiate({
  _id: 'rs0',
  members: [{ _id: 0, host: 'localhost:27017' }],
});
