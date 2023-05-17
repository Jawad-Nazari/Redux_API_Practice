import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      {isLoading && <h3>Data is Loading...</h3>}
      {error && <h3>{error}</h3>}
      {users && (
        <ul className="Users-list-container">
          <div>
            <h1>List of Users</h1>
          </div>
          <div>
            {users.map((user) => (
              <div key={user.login.uuid} className="card">
                <h5>
                  {user.name.first}
                  {' '}
                  {user.name.last}
                </h5>
              </div>
            ))}
          </div>
        </ul>
      )}
    </>
  );
};

export default Users;
