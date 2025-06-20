import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('user');
  if (isLoggedIn) {
    return true;
  } else {
    // redirect to login if not logged in
    window.alert('You must login to access the dashboard.');
    return false;
  }
};
