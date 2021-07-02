import http from 'api/http';

export async function addProject(data) {
  return http.post('/projects', data);
}
export async function deleteProject(data) {
  return http.put('/projects/' + data?.id + '/remove');
}
export async function projects(currentPage, params) {
  return http.get(
    encodeURI(
      `/projects?page=${currentPage}&limit=10&orderBy=createdAt:DESC&filter={"projectStatus.name": {"$nin": ["Completed", "Draft", "Removed"]}}&q=${params}`,
    ),
  );
}

export async function publicProjects(currentPage, params) {
  return http.get(
    encodeURI(
      `/public/project?page=${currentPage}&limit=10&orderBy=createdAt:DESC&filter={"projectStatus.name": {"$nin": ["Completed", "Draft", "Removed"]}}&q=${params}`,
    ),
  );
}

export async function popular(params) {
  return http.get(`/projects/popular/all?filterType=${params}`);
}

export async function publicPopular(params) {
  return http.get(`/public/project/popular/all?filterType=${params}`);
}

export async function myProjects(currentPage, params) {
  return http.get(
    '/projects/my-projects?page=' +
      currentPage +
      '&limit=10&orderBy=createdAt:DESC&q=' +
      params +
      '',
  );
}

export async function favourite(currentPage) {
  return http.get(
    '/users/my-favorite-projects?page=' +
      currentPage +
      '&limit=10&orderBy=createdAt:DESC',
  );
}

export async function addFavourite(data) {
  return http.post('/favorite-projects', data);
}

export async function deleteFavourite(id) {
  return http.delete('/favorite-projects/' + id);
}

export async function getProjectUpdate(id) {
  return http.get('/projects/' + id);
}

export async function updateProject(data) {
  return http.put('/projects/' + data?.id, data);
}

export async function projectStart(id) {
  return http.put('/projects/' + id + '/start');
}
export async function detailProjectPublic(id) {
  return http.get('/public/project/' + id);
}

export async function detailProject(id) {
  return http.get('/projects/' + id);
}
export async function projectCompleteApi(id) {
  return http.put('/projects/' + id + '/complete');
}
export async function addReview(id, data) {
  return http.post(`/projects/${id}/reviews`, data);
}
export async function review({ id, currentPage, limit }) {
  return http.get(
    `/projects/${id}/reviews?page=${currentPage ?? 1}&limit=${
      limit ?? 10
    }&orderBy=modifiedAt:DESC`,
  );
}
export async function updateReview(id, data) {
  return http.put(`/reviews/${id}`, data);
}
export async function myReview(id) {
  return http.get(`/projects/${id}/my-review`);
}
export async function getFeedbackList({ id, currentPage, limit }) {
  return http.get(
    `/projects/${id}/feedbacks?page=${currentPage ?? 1}&limit=${
      limit ?? 10
    }&orderBy=createdAt:DESC`,
  );
}
export async function addFeedBack({ id, data }) {
  return http.post(`/projects/${id}/feedbacks`, data);
}
export async function projectActive(currentPage, params) {
  return http.get(
    encodeURI(
      `/projects/my-projects?page=${currentPage}&limit=10&orderBy=createdAt:DESC&filter={"projectStatus.name": {"$eq": "${params}"}}`,
    ),
  );
}
export async function getProjectCompleted(currentPage, params) {
  return http.get(
    encodeURI(
      `/projects/my-projects?page=${currentPage}&limit=10&orderBy=createdAt:DESC&filter={"projectStatus.name": {"$in": ${params}}}`,
    ),
  );
}
export async function getCountryApi(currentPage) {
  return http.get('/country?page=' + currentPage);
}

export async function searchCountryApi(params) {
  return http.get(
    encodeURI('/country?filter={"name": {"$like": "' + params + '"}}'),
  );
}

export async function shareProjectApi(id) {
  return http.get('/share/project/' + id);
}
