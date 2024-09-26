import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.user);

  // Don't show the sidebar if no user is logged in
  if (!currentUser) return null;

  return (
    <div className="mt-16 sidebar w-64 h-full bg-gray-800 text-white fixed top-0 left-0">
      <h2 className="text-2xl font-bold p-4">
        {currentUser.isAdmin ? 'Admin Menu' : 'User Menu'}
      </h2>
      <ul className="p-4">
        
        {/* Links only visible to admins */}
        {currentUser.isAdmin && (
          <>
            <li className="mb-4">
              <Link to="/admin-dashboard" className="hover:text-gray-300">
                Admin Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/manage-users" className="hover:text-gray-300">
                Manage Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/messages" className="hover:text-gray-300">
                Contact Messages
              </Link>
            </li>
          </>
        )}

        {/* Links only visible to regular users */}
        {!currentUser.isAdmin && (
          <>
            <li className="mb-4">
              <Link to="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/user-settings" className="hover:text-gray-300">
                User Settings
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
