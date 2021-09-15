import { navigate } from 'gatsby';

export default function Redirect() {
  if (typeof window !== 'undefined') {
    navigate('/');
  }
  return null;
}
