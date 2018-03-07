import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
	authority: 'https://itiampingdev.cloud.pge.com',
	client_id: 'digitcat_mobile_test_app_1',
	redirect_uri: 'http://test.pge.com:3000/callback',
	response_type: 'token id_token',
	scope: 'email openid profile'
 
  // client_id: '581912277515-8pqeloei552og7pa13iufb57iug8vu9k.apps.googleusercontent.com',
  // redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  // response_type: 'token id_token',
  // scope: 'openid profile https://www.googleapis.com/auth/youtube.readonly',
  // authority: 'https://accounts.google.com',
  // silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  // automaticSilentRenew: true,
  // filterProtocolClaims: true,
  // loadUserInfo: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
