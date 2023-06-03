import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: 1000,
        iterations: 3500,
        maxDuration: '30s',
      },
    },
  };

export default function () {
  const url  = `https://reqres.in/api/users`;
  const url_upd = `https://reqres.in/api/users/2`;
  const payload_req = JSON.stringify({
    name: 'alex',
    job: 'developer',
  });
  const payload_upd = JSON.stringify({
    name: 'alex',
    job: 'engineer',
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const req = http.post(url, payload_req, params);
  console.log(req.body)
  const upd = http.patch(url_upd, payload_upd, params);
  console.log(upd.body)

}