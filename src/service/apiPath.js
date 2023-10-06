const commonApiPath = {
  TOKEN: `/login/reissuance`,

  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FILE_UPLOAD_ONE: `/file/up/one`,
  FILE_UPLOAD: `/file/up`,

  TEST_API: `/test`,
};

const study = {
  STUDY_LIST: `/study/list`,
};

const apiPath = {
  ...commonApiPath,
  ...study,
};

export default apiPath;
