export function getUser() {
  return fetchUser()
}

export function postUser(data) {
  return fetchUser({ method: 'POST', data })
}

export function patchUser(id, data) {
  return fetchUser({ method: 'PATCH', id, data })
}

function fetchUser({ method = 'GET', id = '', data } = {}) {
  return fetch('/user/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
