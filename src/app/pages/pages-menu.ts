import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Stupid Todos',
    icon: 'clipboard-outline',
    link: '/pages/todos',
    home: true,
  },
  {
    title: 'Covid-19',
    icon: 'shake-outline',
    link: '/pages/dashboard',
    home: false,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
