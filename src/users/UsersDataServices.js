export function getUsers() {
  return fetchUsers()
}

export function getSingleUser(id) {
  return fetchUsers({ id })
}

export function postUser(data) {
  return fetchUsers({ method: 'POST', data })
}

export function patchUser(id, data) {
  return fetchUsers({ method: 'PATCH', id, data })
}

function fetchUsers({ method = 'GET', id = '', data } = {}) {
  return fetch('/users/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
