const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
  };
  return await fetch(url, options);
}

export function followUser(id) {
  return customFetch(`user_follow_url_${id}`, {
    method: "POST",
  });
}

export function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, {
    method: "DELETE",
  });
}

// method: "DELETE",
// body: JSON.stringify({ id: id }),
// });
