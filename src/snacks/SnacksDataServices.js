export function getSnacks() {
  return fetchSnacks()
}

export function postSnack(data) {
  return fetchSnacks({ method: 'POST', data })
}

export function patchSnack(id, data) {
  return fetchSnacks({ method: 'PATCH', id, data })
}

export function getSnackTags() {
  return fetchSnackTags()
}

function fetchSnacks({ method = 'GET', id = '', data } = {}) {
  return fetch('/snacks/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

function fetchSnackTags({ method = 'GET', id = '', data } = {}) {
  return fetch('/snacktags/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
